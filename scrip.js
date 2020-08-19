while (true) {
    document.getElementsByClassName('encounters-album__nav-item--next')[0].click();
    await new Promise(r => setTimeout(r, 1000));
    document.getElementsByClassName('encounters-album__nav-item--next')[0].click();
    await new Promise(r => setTimeout(r, 1000));
    document.getElementsByClassName('encounters-album__nav-item--next')[0].click();
    await new Promise(r => setTimeout(r, 1000));
    document.getElementsByClassName('encounters-album__nav-item--next')[0].click();
    await new Promise(r => setTimeout(r, 1000));
    document.getElementsByClassName('encounters-action__icon')[2].click();
    await new Promise(r => setTimeout(r, 2000));
}
