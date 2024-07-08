import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "imageUrl";

export const PhotoTitle = (record: TPhoto): string => {
  return record.imageUrl?.toString() || String(record.id);
};
