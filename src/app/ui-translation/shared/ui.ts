export enum UIType {
  TEXT,
  MULTIPLE_CHOICE
}

export interface UI {
  type: UIType
  fetch?: string;
  content?: string[];
  mapping?: any;
}

export interface TextUI extends UI{
}

export interface MultipleChoiceUI extends UI {
  mapping: MultipleChoiceUIMapping;
}



// ==============  Mappings ================ //
interface MultipleChoiceUIMapping {
  heading?: string,
  label: string;
}
