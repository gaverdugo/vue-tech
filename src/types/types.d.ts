// Common fields in all API responses
export interface ApiObject {
  by: string;
  id: string;
  time: BigInt;
  type: string;
}

export interface ApiStoryObject extends ApiObject {
  descendants: number;
  kids: string[];
  score: number;
  title: string;
  url: string;
}