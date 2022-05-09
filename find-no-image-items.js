// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://okean5.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=okean5.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const noImg = []
    renderStartBtn()

    function renderStartBtn() {
        const startBtn = document.createElement('button')
        startBtn.classList.add('btn', 'btn-default', 'opener')
        startBtn.style.top = '-100px'
        startBtn.innerText = 'Find'
        //document.getElementsByTagName('body')[0].prepend(startBtn)
        document.querySelector('.basket .wrap').prepend(startBtn)
        startBtn.onclick = (e) => {
            e.stopPropagation()
            findNoImgItems().then( () => renderNoImgItems())

        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function findNoImgItems() {
        let pagination = document.querySelectorAll('.pagination li')
        for (let page = 0; page < pagination.length - 2; page++ ) {

            document.querySelector('.ajax_load_btn').click()
            await sleep(500);

        }

        let items = document.querySelectorAll(".item")
        let noImgItems = document.querySelectorAll('[src="/bitrix/templates/asproallcorp2/images/noimage_product.png"]')
        items.forEach( item => {
            noImgItems.forEach( noImgItem => {
                item.contains(noImgItem) ? noImg.push(item) : ''
            })
        })
    }

    function renderNoImgItems() {
        let itemsContainer = document.querySelector(".items")
        itemsContainer.innerHTML = ''
        !!noImg.length ? noImg.forEach( item => itemsContainer.append(item) ) : ''
    }

})();
