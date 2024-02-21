export type nodeStatesType = {
    headerNode: {
        active: boolean,
        fileType: string,
        file: string,
    },
    bodyNode: {
        active: boolean,
        text: string,
    },
    footerNode: {
        active: boolean,
        text: string,
    },
    buttonsNode: {
        active: boolean,
        buttons: { text: string}[]
    }
}

export type nodeTextStatesType = {
    bodyNode: {
        active: boolean,
        text: string,
    },
    footerNode: {
        active: boolean,
        text: string,
    },
}

export type toggleNodeActionType = 'headerNode' | 'footerNode' | 'buttonsNode'

export type setNodeTextActionType = 'footerNode' | 'bodyNode'

export type activeTabActionType = 'edit message' | 'dashboard' | 'message' | 'account' | 'settings' | ''