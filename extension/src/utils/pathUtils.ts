import { useBodyClass } from "@/hooks/useBodyClass";
import { useLucidStore } from "@/store/useLucidStore";
import React from "react";

export const getPathCategory = (pathname: string): PageCategoryType => {
	if (Spicetify.URI.isPlaylistV1OrV2(pathname)) return "playlist";
	if (Spicetify.URI.isArtist(pathname)) return "artist";
	if (Spicetify.URI.isAlbum(pathname)) return "album";
	if (Spicetify.URI.isGenre(pathname)) return "genre";
	if (Spicetify.URI.isShow(pathname)) return "show";
	if (Spicetify.URI.isProfile(pathname)) return "profile";
	if (Spicetify.URI.isConcert(pathname) || Spicetify.URI.isArtistConcerts(pathname)) return "concert";
	return "other";
};
