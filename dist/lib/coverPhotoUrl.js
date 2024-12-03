"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coverPhotoHandle = void 0;
const coverPhotoHandle = (protocol, host, photoLocation) => {
    if (photoLocation) {
        const baseUrl = `${protocol}://${host}/${photoLocation}`;
        return baseUrl;
    }
    return null;
};
exports.coverPhotoHandle = coverPhotoHandle;
