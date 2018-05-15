enum UIType {
  TEXT = "TEXT",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE"
}

interface GenericUI {
  type: UIType
  isUser?: boolean;
  isLoading?: boolean;
  fetch?: string;
  content?: string[];
  mapping?: any;
}

interface TextUI extends GenericUI {
}

interface MultipleChoiceUI extends GenericUI {
  mapping: MultipleChoiceUIMapping;
}


// ==============  Mappings ================ //
interface MultipleChoiceUIMapping {
  heading?: string,
  label: string;
}

export {UIType, GenericUI, TextUI, MultipleChoiceUI}
