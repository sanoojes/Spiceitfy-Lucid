import SettingsManager from "@/components/settings/SettingsManager";
import BackgroundManager from "@/components/state/BackgroundManager";
import MainStateManager from "@/components/state/MainStateManager";
import { ModalContextProvider } from "@/context/ModalContextProvider";
import { manageBackgroundZIndex } from "@/utils/backgroundUtils";
import { logDebug } from "@/utils/logUtils";
import { replaceIcons } from "@/utils/replaceIcons";
import React from "react";
/**
 * Renders Main things for the theme
 */
const Main = () => {
	logDebug("Render <Main />");

	React.useEffect(() => {
		replaceIcons();
		manageBackgroundZIndex();
	}, []);

	return (
		<>
			<div id="state">
				<MainStateManager />
			</div>
			<div id="background-container" className="background-container" style={{ containerType: "normal" }}>
				<BackgroundManager />
			</div>
			<ModalContextProvider>
				<div id="modal-container" className="modal-container" style={{ containerType: "normal" }}>
					<SettingsManager />
					{/* <ChangeLogManager /> */}
				</div>
			</ModalContextProvider>
			<div>{/* <WindowControlsManager /> */}</div>
		</>
	);
};

export default Main;
