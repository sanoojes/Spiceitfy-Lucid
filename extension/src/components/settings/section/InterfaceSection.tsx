import Section from "@/components/settings/ui/SettingSection";
import { isWindowsPlatform } from "@/constants/constants";
import {
	BORDER_STYLE_OPTIONS,
	GRAIN_MODE_OPTIONS,
	PLAYLIST_BACKGROUND_MODE_OPTIONS,
	PLAYLIST_VIEW_MODE_OPTIONS,
	SETTINGS_ACCESS_MODE_OPTIONS,
} from "@/constants/dropdown";
import { useSettingsStore } from "@/store/useSettingsStore";
import type { BorderRadius, BorderStyle } from "@/types/border";
import type { FontTypes } from "@/types/font";
import type { GrainEffect } from "@/types/grains";
import type { SettingsPositions } from "@/types/main";
import type { PlaylistBackgroundImageMode, PlaylistViewMode } from "@/types/pages";
import type { SettingCardMap } from "@/types/settingTypes";
import { getFontDataFromInput } from "@/utils/fontUtils";
import { renderCards } from "@/utils/render/renderCards";
import React, { useState } from "react";

const InterfaceSection = () => {
	const {
		interfaceSettings: {
			controlSettings: { height: controlHeight },
			fontSettings: {
				body: { fontFamily },
			},
			grainSettings: { grainEffect },
			pagesSettings: { isScrollMode, backgroundImageMode, playlistViewMode },
			borderSettings: {
				color: borderColor,
				style: borderStyle,
				thickness: borderThickness,
				roundedRadius: borderRoundedRadius,
			},
		},
		setFont,
		setGrainEffect,
		setControlHeight,
		setPagesBackgroundImageMode,
		setPlaylistViewMode,
		setIsScrollMode,
		setBorderColor,
		setBorderStyle,
		setBorderThickness,
		settingAccessPosition,
		setRoundedBorderRadius,
		setSettingAccessPosition,
	} = useSettingsStore();

	const [selectedGrainMode, setSelectedGrainMode] = useState<string>(grainEffect);
	const [selectedBackgroundImageMode, setSelectedBackgroundImageMode] = useState(backgroundImageMode);
	const [selectedPlaylistViewMode, setSelectedPlaylistViewMode] = useState(playlistViewMode);

	const onGrainModeChange = (value: string) => {
		setSelectedGrainMode(value);
		setGrainEffect(value as GrainEffect);
	};
	const onBackgroundImageModeChange = (value: string) => {
		setSelectedBackgroundImageMode(value as PlaylistBackgroundImageMode);
		setPagesBackgroundImageMode(value as PlaylistBackgroundImageMode);
	};
	const onPlaylistViewModeChange = (value: string) => {
		setSelectedPlaylistViewMode(value as PlaylistViewMode);
		setPlaylistViewMode(value as PlaylistViewMode);
	};

	const INTERFACE_SETTINGS_CARDS: SettingCardMap = [
		{
			id: "controlSettings",
			conditionalRender: isWindowsPlatform,
			cardProps: {
				title: "Set Control Height",
				tooltip: "Set the height of your window controls in pixels.",
				type: "input",
				settings: {
					type: "number",
					label: "Enter Control Height",
					defaultValue: controlHeight,
					onChange: (value: string) => {
						setControlHeight(Number(value));
					},
				},
			},
		},
		{
			id: "themeSettings",
			conditionalRender: true,
			cardProps: {
				title: "Settings Access Position",
				tooltip: "Choose how to access settings: via the context menu button or a navigation button.",
				type: "dropdown",
				settings: {
					options: SETTINGS_ACCESS_MODE_OPTIONS,
					placeholder: settingAccessPosition,
					selectedValue: settingAccessPosition,
					onChange: (value) => {
						setSettingAccessPosition(value as SettingsPositions);
					},
				},
			},
		},
		{
			id: "font",
			conditionalRender: true,
			cardProps: {
				title: "Font",
				type: "input",
				tooltip: (
					<>
						Supports both Google Fonts via URL and local fonts.
						<span>For Google Fonts, use the full URL (e.g., https://fonts.googleapis.com/css2?family=Roboto). </span>
						<span>For local fonts, type the font family name (e.g., 'Arial').</span>
					</>
				),
				settings: {
					type: "text",
					label: "Font Family or URL",
					defaultValue: fontFamily,
					onChange: (value: string | number) => {
						const type: FontTypes = "body";
						setFont(type, getFontDataFromInput(value.toString()));
					},
				},
			},
		},
		{
			id: "grains",
			conditionalRender: true,
			cardProps: {
				type: "dropdown",
				title: "Grains",
				tooltip: "Choose a grain texture mode.",
				settings: {
					options: GRAIN_MODE_OPTIONS,
					placeholder: selectedGrainMode,
					selectedValue: selectedGrainMode,
					onChange: onGrainModeChange,
				},
			},
		},
		{
			id: "pageSettings",
			sectionName: "Pages Setting",
			conditionalRender: true,
			cardProps: {
				type: "dropdown",
				title: "Pages Background Image",
				tooltip: "Choose a background image mode for playlist pages.",
				settings: {
					options: PLAYLIST_BACKGROUND_MODE_OPTIONS,
					placeholder: selectedBackgroundImageMode,
					selectedValue: selectedBackgroundImageMode,
					onChange: onBackgroundImageModeChange,
				},
			},
		},
		{
			id: "pageSettings",
			conditionalRender: true,
			cardProps: {
				type: "dropdown",
				tooltip: "Sets the view mode for playlists.",
				title: "Playlist View",
				settings: {
					options: PLAYLIST_VIEW_MODE_OPTIONS,
					placeholder: selectedPlaylistViewMode,
					selectedValue: selectedPlaylistViewMode,
					onChange: onPlaylistViewModeChange,
				},
			},
		},
		{
			id: "pageSettings",
			conditionalRender: true,
			cardProps: {
				title: "Toggle Playlist Scroll Mode",
				tooltip: "Enable or disable scrolling for the playlist art image.",
				type: "toggle",
				settings: {
					checked: isScrollMode,
					label: "Scroll Mode Toggle",
					onChange: (value: boolean) => {
						setIsScrollMode(value);
					},
				},
			},
		},
		{
			id: "borderSettings",
			conditionalRender: true,
			sectionName: "Border Settings",
			cardProps: {
				title: "Border Thickness",
				type: "input",
				settings: {
					type: "number",
					label: "Border Thickness",
					defaultValue: borderThickness,
					onChange: (value: string) => {
						setBorderThickness(Number(value));
					},
					settings: {
						step: 1,
						min: 0,
						max: 16,
					},
				},
			},
		},
		{
			id: "borderSettings",
			conditionalRender: true,
			sectionName: "Border Settings",
			cardProps: {
				title: "Rounded Border Radius",
				type: "input",
				settings: {
					type: "number",
					label: "Rounded Border Radius",
					defaultValue: borderRoundedRadius,
					onChange: (value: string) => {
						setRoundedBorderRadius(Number(value));
					},
				},
			},
		},
		{
			id: "borderSettings",
			conditionalRender: true,
			cardProps: {
				title: "Border Color",
				type: "input",
				settings: {
					type: "text",
					label: "Border Color",
					defaultValue: borderColor,
					onChange: (value: string) => {
						setBorderColor(value);
					},
				},
			},
		},
		{
			id: "borderSettings",
			conditionalRender: true,
			cardProps: {
				title: "Border Style",
				type: "dropdown",
				settings: {
					options: BORDER_STYLE_OPTIONS,
					selectedValue: borderStyle,
					onChange: (value) => {
						setBorderStyle(value as BorderStyle);
					},
				},
			},
		},
	];

	return (
		<Section title="Interface Settings" description="Set your Spotify interface settings.">
			{renderCards(INTERFACE_SETTINGS_CARDS)}
		</Section>
	);
};

export default InterfaceSection;
