const username = 'hangptt';
const password = 'Hang@123';
const warehouseImport = "Trường Chinh";
const product = 'MOON.01.TEST.1210';
const quality = 5;

describe('Tiến trình 4: Cập nhật giá vốn cho Đơn hàng, Trả hàng bán', () => {
    beforeEach(() => {
        cy.viewport(2000, 1280);
        cy.visit('http://192.168.100.198:8032/listOrder');
        cy.get("#username").type(username);
        cy.get("#password").type(password);
        cy.get('button').eq(1).click();
        cy.wait(1000);
        //Thêm mới phiếu
        
    });

    it('Cập nhật giá vốn trung bình ',()=>{
        cy.get('button').contains('Thêm mới').click();
        cy.wait(1000);

        cy.get('input[role="combobox"]').eq(1).click().type(warehouseImport + "{pageDown}{enter}");
        cy.get('div').contains('Nhập hoặc quét mã sản phẩm, tên sản phẩm').click().type(product);

        cy.get('input[type="text"]').eq(2).click().clear().type('{selectall}{del}'+ quality + '{del}');
        

    });

})
