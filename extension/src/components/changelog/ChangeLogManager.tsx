import React, { type FC } from 'react';
import { RELEASES_URL } from '@/constants/constants';
import ChangeLog from '@/components/changelog/ChangeLog';
import { getMarkdownHTML } from '@/utils/markdownUtils';
import Modal from '@/components/modal/Modal';
import { useModal } from '@/context/ModalContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { logToConsole } from '@/utils/logUtils';

const ChangeLogManager: FC<{ currentVersion?: string }> = ({
  currentVersion,
}) => {
  const [releaseData, setReleaseData] = React.useState<ReleaseData>({
    isLoading: true,
    error: null,
    releases: null,
  });

  const [previousVersion, setPreviousVersion] = useLocalStorage<string | null>(
    'lucid:previousVersion',
    null
  );
  const { closeModal, isOpen, openModal } = useModal('changelog');

  const fetchReleaseData = async () => {
    logToConsole('Fetching release data...');
    setReleaseData((prevState) => ({ ...prevState, isLoading: true }));

    try {
      const response = await fetch(
        RELEASES_URL ||
          'https://api.github.com/repos/sanoojes/spicetify-lucid/releases'
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Release[] = await response.json();
      logToConsole('Fetched release data:', { level: 'info' }, data);

      const releasesWithHTML: Release[] = await Promise.all(
        data.map(async (release) => ({
          ...release,
          body:
            (await getMarkdownHTML(
              release.body,
              'sanoojes',
              'spicetify-lucid'
            )) || '',
        }))
      );

      setReleaseData({
        isLoading: false,
        error: null,
        releases: releasesWithHTML,
      });

      const latestVersion = data[0].tag_name;
      if (previousVersion === null || latestVersion !== previousVersion) {
        console.log('Opening changelog modal because new version detected');
        openModal();
      }
    } catch (error) {
      setReleaseData((prevState) => ({
        ...prevState,
        isLoading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
      }));
      logToConsole('Error fetching release data:', { level: 'error' }, error);
    }
  };

  React.useEffect(() => {
    fetchReleaseData();
  }, []);

  const handleCloseModal = React.useCallback(() => {
    closeModal();

    const latestVersion = releaseData.releases?.[0]?.tag_name;
    if (latestVersion) {
      setPreviousVersion(latestVersion);
    }
  }, [closeModal, releaseData.releases, setPreviousVersion]);

  return (
    <>
      <Modal title='Changelog' onClose={handleCloseModal} isOpen={isOpen}>
        <ChangeLog
          releases={releaseData.releases}
          isLoading={releaseData.isLoading}
          error={releaseData.error}
          currentVersion={currentVersion}
        />
      </Modal>
    </>
  );
};

export default ChangeLogManager;