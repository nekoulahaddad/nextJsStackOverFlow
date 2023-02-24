export interface IMainSlice {
    sortTerm: string;
    searchTerm: string;
    sortBy: string;
}

export interface ISortOption {
    id: number;
    text: string;
    value: string;   
}

export interface IQuestionData {
    items: IQuestionItem[]
}

interface IQuestionItem {
    tags: string[];
    owner: any;
    is_answered: boolean;
    view_count: number;
    answer_count: number;
    question_id: number;
    title:string;
}