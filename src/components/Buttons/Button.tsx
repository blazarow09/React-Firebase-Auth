import buttonStyleWrapper from './HOC/buttonStyleWrapper';

const Button = (props: any) => {
    return (
        <button className='hoc-btn' style={props.styles}>{props.styles.textContent}</button>
    )
}

export default buttonStyleWrapper(Button);