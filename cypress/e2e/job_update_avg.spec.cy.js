const username = 'admin';
const password = '123';
describe('Job cập nhật giá vốn trung bình - Thao tác UI', () => {
    beforeEach(() => {
        cy.viewport(2000, 1280);
        cy.visit('http://192.168.100.198:8032/average-capital-price');
        cy.get("#username").type(username);
        cy.get("#password").type(password);
        cy.get('button').eq(1).click();
        cy.wait(1000);
        //Thêm mới phiếu
        cy.get('button').contains('Thêm mới').click();
        cy.wait(1000);
    });
    it('Cập nhật giá vốn trung bình ', () => {
    })
})
