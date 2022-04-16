export const TodoItem = ({todo}) => {


    let count=0
    const handleChange = ()=>{
     count++;
        if(count >5){
        return;
      }
        if(count%2 == 0){
            var x = document.querySelector(".outer1");
             x.setAttribute("class","outer");
        }if(count%2 != 0){
            x = document.querySelector(".outer");
            x.setAttribute("class","outer1");
        }
        
       
    }
    return (
        <div className="item2">
            
            <div className="item1">
               {todo} 
            </div>
            <div className="outer" onClick={
                handleChange
                }>
                <div className="inner" 
                ></div>
            </div>
        </div>
    )
}