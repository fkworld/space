/**
 * @author fkworld
 * @file 项目启动唯一入口
 * - 需要被 index.html 引用
 */

import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
