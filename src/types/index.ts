export interface Istate{
    people:{
    name:string;
    url:string;
    age: number;
    notes?:string;
    }[]  
}
export interface Iprops{
    people:Istate['people'];
     setpeople: React.Dispatch<React.SetStateAction<Istate["people"]>>;
}