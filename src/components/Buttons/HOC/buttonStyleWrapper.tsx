import { _isComputed } from 'mobx/dist/internal';
import commonStyles from '../commonStyles';

const translateProps = (props: any) => {
    let _styles = { ...commonStyles.default };

    if (props.disabled) {
        _styles = { ..._styles, ...commonStyles.disabled }
    } else if (props.primary) {
        _styles = { ..._styles, ...commonStyles.primary }
    } else if (props.secondary) {
        _styles = { ..._styles, ...commonStyles.secondary }
    } else if (props.warning) {
        _styles = { ..._styles, ...commonStyles.warning }
    } else if (props.danger) {
        _styles = { ..._styles, ...commonStyles.danger }
    } else if (props.dashed) {
        _styles = { ..._styles, ...commonStyles.dashed }
    }

    return { ...props, styles: _styles };
}

export default (WrappedComponent: any) => {
    return function wrappedRender(args: any) {
        return WrappedComponent(translateProps(args))
    }
}