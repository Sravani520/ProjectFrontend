

const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_COURSELIST':
            return{
                ...state,
                CourseList: [...state.CourseList, action.item],
            };
            default:
                return state;  
        case 'REMOVE_COURSE':
            return{
                ...state,
                CourseList:state.CourseList.filter(item=>item.id !== action.id)
            }
    }

};
const getLocalCourseData=()=>{
    let LocalData=localStorage.getItem("YourCourses");
    if(LocalData ===[]){
        return [];
    }else{
        return JSON.parse(LocalData);
    }
}
export const initialState={
    
    CourseList:[],
};
export default reducer;