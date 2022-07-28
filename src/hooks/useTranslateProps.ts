import commonStyles from '../components/Buttons/commonStyles';

export function useTranslateProps(props: any) {
    let _styles = { ...commonStyles.default };

    if (props.disabled) {
        _styles = { ..._styles, ...commonStyles.disabled }
    }

    return { ...props, styles: _styles };
}