export interface FileType {
  type: "file";
  id: number;
  name: string;
  meta: string;
}

export interface FolderType {
  type: "folder";
  id: number;
  name: string;
  data: (FolderType | FileType)[];
}
