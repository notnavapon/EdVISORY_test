/// <reference types="cypress" />

describe('EdVISORY', () => {

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('File Upload', ()=> {
        const fileName = 'uploadfile.png'
        cy.fixture(fileName).as('file')

        cy.get('a[href="/upload"]').click()
        cy.get('input[id="file-upload"][type="file"]').selectFile('@file').then(()=>{
            cy.get('input[id="file-submit"][type="submit"]').click()
            cy.contains(fileName).should('exist')
        })
    })

    it('Multiple Windows', ()=> {
        cy.get('a[href="/windows"]').click()
        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click();
    })

    it.only('Sortable Data Tables', ()=> {
        cy.get('a[href="/tables"]').click()

        //table1 No Class or ID attributes to signify groupings of rows and columns
        //click header column
        cy.get('#table1 > thead th').eq(0).click();
        cy.get('#table1 > thead th').eq(1).click();
        cy.get('#table1 > thead th').eq(2).click();
        cy.get('#table1 > thead th').eq(3).click();
        cy.get('#table1 > thead th').eq(4).click();
        cy.get('#table1 > thead th').eq(5).click();
        //click edit and delete row1
        cy.get('#table1 tbody tr').eq(0).find('td').eq(5).contains('edit').click();
        cy.get('#table1 tbody tr').eq(0).find('td').eq(5).contains('delete').click();

        //click edit and delete row2
        cy.get('#table1 tbody tr').eq(1).find('td').eq(5).contains('edit').click();
        cy.get('#table1 tbody tr').eq(1).find('td').eq(5).contains('delete').click();

        //click edit and delete row3
        cy.get('#table1 tbody tr').eq(2).find('td').eq(5).contains('edit').click();
        cy.get('#table1 tbody tr').eq(2).find('td').eq(5).contains('delete').click();


        //click edit and delete row4
        cy.get('#table1 tbody tr').eq(3).find('td').eq(5).contains('edit').click();
        cy.get('#table1 tbody tr').eq(3).find('td').eq(5).contains('delete').click();



        //table2 Class and ID attributes to signify groupings of rows and columns
        //click header column
        cy.get('span[class="last-name"]').click();
        cy.get('span[class="first-name"]').click();
        cy.get('span[class="email"]').click();
        cy.get('span[class="dues"]').click();
        cy.get('span[class="web-site"]').click();
        cy.get('span[class="action"]').click();

        //click edit and delete row1
        cy.get('#table2 tbody tr').eq(0).contains('edit').click();
        cy.get('#table2 tbody tr').eq(0).contains('delete').click();

        //click edit and delete row2
        cy.get('#table2 tbody tr').eq(1).contains('edit').click();
        cy.get('#table2 tbody tr').eq(1).contains('delete').click();

        //click edit and delete row3
        cy.get('#table2 tbody tr').eq(2).contains('edit').click();
        cy.get('#table2 tbody tr').eq(2).contains('delete').click();

        //click edit and delete row4
        cy.get('#table2 tbody tr').eq(3).contains('edit').click();
        cy.get('#table2 tbody tr').eq(3).contains('delete').click();
        
    })

    // it.only('Sortable Data Tables', ()=> {

    //     //table1 No Class or ID attributes to signify groupings of rows and columns
    //     cy.get('a[href="/tables"]').click()
    //     const dataBeforeSorting = []
    //     const dataAfteSorting = []

    //     cy.get('#table1 > tbody tr').each((row) => {
    //         const rowData = []
    //         cy.wrap(row).find('td').each((cell) => {
    //           cy.wrap(cell).invoke('text').then((text) => {
    //             rowData.push(text)
    //           });
    //         }).then(() => {
    //           dataBeforeSorting.push(rowData)
    //         });
    //     })
    //     // .then(()=>{
    //     //     cy.log(dataBeforeSorting[1].length)
    //     //     cy.log(JSON.stringify(dataBeforeSorting))
    //     // })

    //     // cy.wrap(dataBeforeSorting).each(rows => {
    //     //     cy.wrap(rows).each(items =>{
    //     //         cy.log(items);
    //     //     })
    //     //   });
    //     cy.get('#table1 > thead th').eq(0).click();


    //     cy.log('Check data after clicking Lastname')

    //     cy.get('#table1 > tbody tr').each((row) => {
    //         const rowData = []
    //         cy.wrap(row).find('td').each((cell) => {
    //             cy.wrap(cell).invoke('text').then((text) => {
    //                 rowData.push(text.trim())
    //             });
    //         }).then(() => {
    //             dataAfteSorting.push(rowData)
    //           });
    //       }).then(()=>{
    //         cy.log(JSON.stringify(dataBeforeSorting))
    //         cy.log(JSON.stringify(dataAfteSorting))
    //         cy.log(dataAfteSorting.length)
    //         for (let row_after = 0; row_after < dataAfteSorting.length; row_after++) {
    //             for (let row_before = 0; row_before < dataBeforeSorting.length; row_before++) {
    //                 if(dataAfteSorting[row_after][0] === dataBeforeSorting[row_before][0]){
    //                     for(let cell = 0; cell < dataBeforeSorting[row_before].length; cell++){
    //                         if(dataAfteSorting[row_after][cell] === dataBeforeSorting[row_before][cell]){
    //                             cy.log(row_after + " "+cell + ":" +dataAfteSorting[row_after][cell])
    //                             cy.log(row_before + " "+cell + ":" +dataBeforeSorting[row_before][cell])
    //                             expect(dataAfteSorting[row_after][cell]).to.equal(dataBeforeSorting[row_before][cell])
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //       })

    //     //table2 Class and ID attributes to signify groupings of rows and columns
    // })
})