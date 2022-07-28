const styles = {
    default: {
        backgroundColor: '#fff',
        color: '#000',

        padding: '7px 10px 7px 10px',
        cursor: 'pointer',
        
        borderRadius: '20px',
        border: '1px solid #000',

        margin: '0 7px 0 7px',
        
        textContent: 'Default'
    },
    disabled: {
        backgroundColor: '#9c9c9c',
        color: '#c7c6c6',

        border: 'none',
        
        textContent: 'Disabled'
    },
    primary: {
        backgroundColor: '#0db50d',
        color: '#eae8e8',

        border: 'none',

        textContent: 'Primary'
    },
    secondary: {
        backgroundColor: '#0394cf',
        color: '#eae8e8',

        border: 'none',

        textContent: 'Secondary'
    },
    warning: {
        backgroundColor: '#f3d703',
        color: '#000',

        border: 'none',

        textContent: 'Warning'
    },
    danger: {
        backgroundColor: '#f50000',
        color: '#eae8e8',

        border: 'none',

        textContent: 'Danger'
    },
    dashed: {
        backgroundColor: '#fff',
        color: '#000',

        border: '1px dashed #0db50d',

        textContent: 'Primary dashed'
    }
}

export default styles;