import style from './textarea.module.css'


function Textarea(props){

  return(

    <div className={style.textareaWrapper}>
        <label>{props.label}</label>
        <textarea onChange={props.handelChange}></textarea>
    </div>

  )



}

export default Textarea
