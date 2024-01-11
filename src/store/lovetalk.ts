import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useLoveTalkStore = defineStore('lovetalk', {
    // 真正存储数据的地方
    state() {
        return {
            talkList: [
                {
                    id: nanoid(),
                    title: '草莓，蓝莓，半月梅，今天你想我了没？'
                },
                {
                    id: nanoid(),
                    title: '不要抱怨，抱我'
                },
                {
                    id: nanoid(),
                    title: '“我觉得你这个人不适合谈恋爱” “为什么?” “适合结婚!'
                },
            ]
        }
    }
})