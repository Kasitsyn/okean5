// ==UserScript==
// @name         Avito
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.avito.ru/additem
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX///+XzyYAqv//YWOhafcApv8AqP+Vzh//V1n/WVv/XmCgZ/ePzACeZPf/XF4ApP//+/ucYPfz+//t9uC/5v/2++3i8ciq2f9nxf/K6v8ArP/h9P//U1Xy+eee0jbo9NTd77/5/POi1EKaW/az4v//4OD/xMWG0P/r+P+4kPno3P3W67I0t/9RvP+t3//T7v9YwP//oqP/sbL/gIH/aGr/lpf/1dX/6Oj/dXf/xcX/bW//qqsts//A4YSv2mfM56Cq2Fbz7P6ncvfEpPrk1f3C4oy+mvm33XKse/iyhvjKrfr/jI3/2Nia2P+l1U3axvz28f7OtPvUvvuAAOSKAAAIqUlEQVR4nO2cZ1fiTBSAAUmhRZDyIiIKomJbVizYwYZdd/f//5h3QhNlksxM7jUJZ55Pu+dssnnOLVMyIRSSSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSGBqL9f8Iv+qLDa8fBZ5GfXNXnVdGzEd2N3MzpLn0tqcqauQLqqpE9n7NhmSzGPmuN7JUSsUlrx/PNc09C72R5O9gOy4V5+38Bo7FBa8fU5y3iJOfiVKqe/2ggizsKQx+fcei188qRLPEEsCh4oVQNabXN1r7R0dH+62N9TT08ztSZ/cjqKVF3v9gvXVglPWYYRLTy8bB+TqGhyW/WDN07JjjuX1640SPxecmicf0k9bPRZJbMBKZ51BsxfWvekNJ3fgpxzq/IClG1kQ9PtQpegP0uVNUsyFNrhocU2JqN+mjMi1+4ziWX/DDuFASEoyoFww3b5/FbPxMjEP0lrMnFkKmcfE4ZhfAUTkiZ+qbSBEOcOw2x2VHP5PyBqbgkrAfoWQ/R311ytAR+jGiYVE0R02UTbtbt+ecU3SIgVeLzXk3MYyoNv00fWawCs7FD9E6qnCbGRraNJsj1hztB/EFSbAp3mYGKJY7G69sXWZEGamhuqrCfhAtK/GMuQgx87Th0o9Qsrj1hvVUjY7ewjB0MRaOUOhjYpozhFhBdNlnTCx6zSlvCEkQEcb9hntBq1H/gH2kGAfxBN5QaNX0HaVJuXObr5EOKLfBDTchYqi8Ue7M3WdMYvC9ZhdAkF6IL/xJipKmECGMRHYpdxYRJGkKLdhwNycdQWk1bZ4J2yc69Px7EaLRUCduxyJlSAyhZ24grZSsg6ebqVCjQWg1/wHFcHpW0xLLUmM/MIbngoZHPjWcfhe1L9ZLfWvo3xgK7OVTDac3v/1Sh7PfS2d/PJz9OU0IRJA6LxUSnNOhBUO7EFNvwLXFAbgh3vpQYBMDZX2Yg2g1Km2Nn/bJGh9gMzESob9FFEhThCTF3GtjfK82CcZeG8Ssxup1/gn3fukZxn5pQ/AF9wRWe97cvQYlhADvLaidtA9nEONnKIKhJbdpqlq+BebcMi2/4hiGfrsLot1L4HOePNWhlxVjXAaxZHcwmmNn3zjBO1VTdKNoXYUm7UPWUozH4Qf7MaLnhfo4nBlqx9kU4zHUQ0Mu1sGUte9X1pkU4wZWlxkinKf2Z036tA+da9GYQz/2xXE6eBJ1j+He6QOnjqqfINbgkCWhUlQv2A7tn8fswmjgDROTLIoEke3wJWH9wPL8Zbx8glyCI3L8OzbUZaEFx2dlWhyN8uGPnJ/tw7sWVkscgoTjF0M3JiMZJ38/wDyvN8UiV7tR+T9HSJ8encTLesxELxtnLxv4DeYrSxfsYVT2hL4MSrfXT1vn5+etjdf2z39vQSiyFuO88zjoU3IlljAqF3wl6CsWNlWnalRKtpNt/7NUtP3+UFE3g/8daWPT5hvStwB/ezhJrlhSvlmqinpR5P6ay8csNN+Ku6X5wdfc80ppt/gW4PZiyUKjmavXc7lmY0ZyUwJBNb9skq96/SAIVFd2Lq/eK2EtmUxq4cr71eXOygx5ZjvdMBEjhAeYf0wmw91O1utHgyDfqZh2YQqmZWfZ6wd0SeGBWNhAYnlV8PohXVDoJqnB+xbJ91WvH1SQLIvf0HHF64cVoHrJ6DdwfAhcZy1UbOtv2jG86vUj83HPEcAhyUuvH5qDapcvgEPFWt7rB2clW+EOYB8tHJCGs0If31kUtUCMjSsiGTpSTAZAcYW/x0zif8WsKz8zUX1ei1XBJjOhGPZ3R+26FSSKNa8l7Lh30WXGJB+81rCmACFIFFe9FrHCfREO8G8pXsKEkCj6NE+zUIK+HRUB+uiIn+mn1x+3W0+PT1vPH9dM/x6ozQzAbzbXz9G1TCqVSCRSqczazTOD5DtcCPGDuL2VSSWinyQymZ6TI2gIsYN4m0lFv5NKPdtf9AAZQhLELp7f9U1mys8k8/jH5qo8bAhJENH2w+8yCaogCWN02/qyDrShdv/jgqQcE9bFWAEWJBMbHMHrhLUgUYxaJSrgaD8iibJQTN/YCZJEfbK4EDxJsdK0R28yE+3mL/1CwPnM2BBjSNxecxAkUaSWYjUMbxjWEFYYT/Y52jfs0S50s79mCcL0e9spR03WaM1mB8WwA27Ym57KMFbiJUKSIqwS/zg00gGJR8qlVyiGXWhDhj5jQus1oOuKsWEN+p3iX5YyJGl6N3Ul1AbNd6CbKVMZEsPpRUYexS+sQZ/TYBgr+lk6PV4s44QQfHnxyGi4NW2IMVh4aDg9N501w+DGcPbrkLGXUjZs8jiG4L2UdTz8mLoyKOOh7+Y0Feg5DeO89IZyaUDmpYxrC9q+aUDWFqE7pvUhbZGPsj7U4NeHLCMiZTQMBWeNz9JrMhb7NAhg7NOEtpwqkVqFoeDstYX+RB32S2kLfJPA7JeGtlO2e970vcQQzp430pvuD7v3FinrVzPwG6YajqCdYiJh9+4J2lDDOzK8HaW3m8yN3Wtg8AUUzouZAeke7R1w5tb+KuCJG+Y7YMLd01fHRCqzZZOhfaDf4++gGpJU7aXWMuZRjASxW4ve/vhZjAqyoMn2v97Tzc3jU++fU/gGrIKep8EOoRCAQfyREPIDOP326bk2uCM12pXXKhZUoQRRVhUgADUbf7aZASBnaP16fnZADeCsvj/76Ii8+zWG5vMPvMU/6xri14HiE5fzU/9+ifBJwc2nXX5uo58UxBM1CBE0WRFsNwH5wNIkXxMpRq3i8y76hQfuYtT8/EEXjVXOTNW0QPSYSfI8YdSSV76dbNtQqDH/LkYlMC3mGzssjsQvcAk6wWrX4td3Pv26QfYzyd6HrSQ1Lald+vzTbTZW7mta/3eiJtxMu9p9UMuPQr7QeejW+j/11f+xr+5DpxDE7ulANb+cNZnNH2yTSCQSiUQikUgkEolEIpFIJBKJRCKRBJn/AQby/rRXilRTAAAAAElFTkSuQmCC
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let config
    function renderStartBtn() {
        const startBtn = document.createElement('button')
        startBtn.innerText = 'Add'
        document.getElementsByTagName('body')[0].prepend(startBtn)

        startBtn.onclick = (e) => {


        config = document.getElementsByName('description_html')[0].value
        config = config.slice(3,config.length - 4)
        let configItems = config.split('/')

        const name = configItems[0]
        const cpu = configItems[0]
        const ram = configItems[1]
        const hdd = configItems[2]
        const gpu = configItems[3]
        const lcd = configItems[5]

        window.navigator.clipboard.writeText(`🔹🔹🔹🔹 НОУТБУК ${name}🔹🔹🔹🔹\n🔸 Центральный процессор\n${cpu}\n🔸 Память оперативная\n${ram}\n🔸 Запоминающее устройство\n${hdd}\n🔸 Видеокарта\n${gpu}\n🔸 Диагональ\n${lcd}\n🔹🔹🔹🔹\n✅ Ноутбук готов к работе - включай и пользуйся\n✅ Технически исправен\n✅ Внешнее состояние можно оценить по фото\n✅ Все детали родные и не менялись\n✅ Windows настроена\n✅ Свежая термопаста\n✅ Установлены все драйвера\n🔹🔹🔹🔹\n💥 Гарантия на всю технику\n💥 Более 100 ноутбуков для удалённой учебы, работы и развлечений\n💥 Подберем под любой бюджет: от 2000р до 100000р\n💥 Доставим в любой город\n💥 Любые тесты ноутбука при вас\n💥 Установка любых бесплатных программ\n🔹🔹🔹🔹\n💚 Покупаем любую цифровую технику\n💚 Работаем с юр. лицами\n💚 Безнал имеется`)
        document.querySelector('.public-DraftEditor-content div[data-contents="true"]').focus()

        console.log(configItems)

        }
    }

    function configParsing() {

    }

    renderStartBtn()
    // Your code here...
})();
