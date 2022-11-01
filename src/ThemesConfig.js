
class GlobalTheme {
    constructor() {
        this.primary = '',
        this.secondary = ''
    }

    set globalColor (theme)  {
        this.primary = theme.primary,
        this.secondary = theme.secondary
    }

}

export default {GlobalTheme}