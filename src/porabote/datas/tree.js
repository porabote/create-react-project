class Tree {

    buildNestedList(source) {

        let sortedListByParent = this.sortListByParent(source);

        let target = {};
        for (let id in source) {
            if (!source[id]['parent_id']) {
                target[source[id]['id']] = source[id];
                if (typeof sortedListByParent[source[id]['id']] !== "undefined") {
                    target[source[id]['id']]['children'] = this.setTreeItems(sortedListByParent[source[id]['id']], sortedListByParent)
                }
            }
        }
        return target

    }

    setTreeItems(items, sortedListByParent) {
        for (let id in items) {
            if (typeof sortedListByParent[items[id]['id']] !== "undefined") {
                items[id]['children'] = this.setTreeItems(sortedListByParent[items[id]['id']], sortedListByParent)
            }
        }
        return items
    }

    sortListByParent(source) {
        let target = {};
        for (let id in source) {
            if (typeof target[source[id]['parent_id']] === "undefined") {
                target[source[id]['parent_id']] = {}
            }
            target[source[id]['parent_id']][source[id]['id']] = source[id];
        }
        return target;
    }
}

export default new Tree