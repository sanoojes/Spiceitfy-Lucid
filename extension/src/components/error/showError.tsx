import React, { type FC } from 'react';
import { useState, useRef } from 'react';
import styles from './error.module.css';

const githubRepoUrl = 'https://github.com/sanoojes/Spicetify-Lucid/issues';

const ErrorNotification: FC<{ error: unknown }> = ({ error }) => {
  const [showDetails, setShowDetails] = useState(false);
  const errorDetailsRef = useRef<HTMLPreElement>(null);

  let formattedError = '';
  if (error instanceof Error) formattedError = error.message;
  else formattedError = JSON.stringify(error, null, 2);

  const handleCopyError = () => {
    if (errorDetailsRef.current) {
      navigator.clipboard.writeText(errorDetailsRef.current.textContent || '');
      Spicetify.showNotification('Error details copied!', false, 2000);
    }
  };

  return (
    <div style={{ width: '50vw' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ margin: 'auto 0' }}>
          <p>
            Oops! Lucid theme encountered an error. Please{' '}
            <a href={githubRepoUrl} target='_blank' rel='noopener noreferrer'>
              report an issue here
            </a>
          </p>
        </span>
        <div>
          <button
            type='button'
            onClick={() => setShowDetails(!showDetails)}
            className={styles.button}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>

          <button
            type='button'
            onClick={handleCopyError}
            className={styles.copyButton}
            style={{ marginLeft: '8px' }}
          >
            Copy Error
          </button>
        </div>
      </div>
      {showDetails && (
        <pre style={{ whiteSpace: 'pre-wrap' }} ref={errorDetailsRef}>
          {formattedError}
        </pre>
      )}
    </div>
  );
};

export const showError = (error: unknown) => {
  console.error('[Lucid] Error:', error);
  Spicetify.showNotification(<ErrorNotification error={error} />, true);
};
