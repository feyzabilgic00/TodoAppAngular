export interface TodoList{
    push(arg0: { id: any; content: string; isCompleted: boolean; });
    id:string;
    content:string;
    isCompleted:boolean;
    createdOn:Date;
}