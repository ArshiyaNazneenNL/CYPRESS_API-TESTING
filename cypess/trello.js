///<reference types ="Cypress"/>

describe('add a board', () => {
    let id;
    const  key= "ab4a2c28e5cc3ec09b7f8aed24bdaf44"
    const token= "ATTA02efbbaf1059d24b6b926b235f3686cc7b84479547bf0d32bd090e2a5f751340F5D0DF82";
    it('add', () => {
        cy.request({
            method: "POST",
            url: "https://api.trello.com/1/boards/?&key="+key+"&token="+token+"",
            body: {
                "name": "Arshiya"
            },
        }).then((response) => {
            expect(response.status).to.eql(200);
            let body= JSON.parse(JSON.stringify(response.body))
            id=body.id
        })
    });
    it('update', () => {
        cy.request({
            method :"PUT",
            url :"https://api.trello.com/1/boards/"+id+"?key="+key+"&token="+token+"",
            body :{
               "name":"updated name" ,
               "id":id
            }
            
        }).then((response)=>{
            expect(response.status).to.eql(200);
            let body= JSON.parse(JSON.stringify(response.body))
           cy.log(body)})

    });
  it('get', () => {
            cy.request({
              method : "GET",
              url : "https://api.trello.com/1/boards/"+id+"?key="+key+"&token="+token+"",
          
    }).then((response)=>{
        expect(response.status).to.eql(200);
        let body= JSON.parse(JSON.stringify(response.body))
       cy.log(body)
})

});
//if we dont want the delete test case to run, thn we just have to chnge the it-->xit
xit('delete', () => {
    cy.request({
        method :"DELETE",
        url :"https://api.trello.com/1/boards/"+id+"?key="+key+"&token="+token+"",
        
    }).then((response)=>{
        expect(response.status).to.eql(200);
        let body= JSON.parse(JSON.stringify(response.body))
       cy.log(body)

    })
});
});