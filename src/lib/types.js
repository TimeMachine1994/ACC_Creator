// $lib/types/index.ts

export interface Goal {
    _id: string;
    name: string;
    summary: string;
    // Add any other properties specific to a Goal
  }
  
  export interface Chat {
    user: string;
    text: string;
    // Add any other properties specific to a Chat message
  }
  
  export interface Note {
    response: string;
    userNote: string;
    // Add any other properties specific to a Note
  }
  