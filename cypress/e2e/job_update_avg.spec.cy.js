const username = 'hangptt';
const password = 'Hang@123';

const start_date = '18/06/2024';
const end_date = '19/06/2024';

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
        // Chọn thời gian
        cy.get('input[placeholder="dd/mm/yyyy"]').eq(0).click().clear().type(start_date);
        cy.get('input[placeholder="dd/mm/yyyy"]').eq(1).click().clear().type(end_date);
        cy.get('button[type="submit"]').contains('Thêm mới').click();
        
        cy.log('Cập nhật giá vốn trung bình thành công!')


    })
})
