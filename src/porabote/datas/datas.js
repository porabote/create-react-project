class Datas {

    getValueByPath = (path, source) => {

        let splits = path.split('.')

        let cursor = source
        splits.map((key) => {
            if (typeof cursor[key] === "undefined") return null
            cursor = cursor[key]
        })

        return cursor
    }

    isObject = (item) => {
        return (item && typeof  item === 'object' && !Array.isArray(item))
    }

    isArray = (item) => {
        return (item && Array.isArray(item))
    }

    spliceByKey = (target, name, index) => {
        let splits = name.split('.');

        let cursor = target;
        for (const key in splits) {
            cursor = cursor[splits[key]]
        }
        cursor.splice(index, 1)

        return target
    }

    pushValue = (target, name, value) => {
        let splits = name.split('.');

        let cursor = target;
        for (const key in splits) {
            cursor = cursor[splits[key]]
        }
        cursor.push(value)

        return target
    }

    replaceValue = (target, source) => {

        for (const key in source) {
            if (this.isObject(source[key])) {
                if (!target[key]) Object.assign(target, {[key]: {}})
                this._replaceValue(target[key], source[key])
            } else if (this.isArray(source[key])) {
                target[key] = source[key]
            } else {
                Object.assign(target, {[key]: source[key]})
            }
        }

        return target
    }

    mergeValues = (target, source) => {

        for (const key in source) {
            if (this.isObject(source[key])) {
                if (!target[key]) Object.assign(target, {[key]: {}})
                this._mergeValues(target[key], source[key])
            } else if (this.isArray(source[key])) {
                if (!target[key]) Object.assign(target, {[key]: []})
                this._mergeValues(target[key], source[key])
            } else {
                Object.assign(target, {[key]: source[key]})
            }
        }

        return target
    }
}

export default new Datas()