const username = 'hangptt';
const password = 'Hang@123';
const warehouseImport = "Trường Chinh";
const product = 'MOON.01.TEST.1210';
const quality = 5;
const text = "Auto test tiến trình 5";

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

    it.skip('Tiến trình 4 - Đơn hàng - Order detail',()=>{
        cy.get('button').contains('Thêm mới').click();
        cy.wait(1000);

        cy.get('input[role="combobox"]').eq(1).click().type(warehouseImport + "{pageDown}{enter}", {delay:300});
        cy.get('div').contains('Nhập hoặc quét mã sản phẩm, tên sản phẩm').click().type(product);

        cy.get('input[type="text"]').eq(2).click().clear().type('{selectall}{del}'+ quality + '{del}');
        cy.get('input[placeholder="Chọn hình thức"]').click().clear().type( 'Chuyển khoản' + "{pageDown}{pageDown}{enter}", {dely:300});
        cy.wait(1000);
        cy.get('input[placeholder="Ghi chú"]').click().clear().type( text, {dely:300});
        
        cy.get('button').contains('Thanh toán').click();
        cy.wait(1000);
       

    });

    it('Tiến trình 4 - Trả hàng bán - Back order detail', ()=>{
        

    })

})
