const username = 'hangptt';
const password = 'Hang@123';
const warehouseImport = "Trường Chinh";
const product1 = 'MOON.01.TEST.1230';
const product2 = 'MOON.01.TEST.1235';
const quality = 5;
const totalMoney = 5000000;
const text = "Auto test tiến trình 5";

const orderCode = 'HD100000134';
const quality_back = 2.5;

function order(username, password, warehouseImport, product1,product2,quality, totalMoney,text, orderCode, quality_back){
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
    
        it('Tiến trình 4 - Đơn hàng - Order detail',()=>{
            cy.get('button').contains('Thêm mới').click();
            cy.wait(1000);
    
            cy.get('input[role="combobox"]').eq(1).click().type(warehouseImport + "{pageDown}{enter}", {delay:300});
            
            cy.get('div').contains('Nhập hoặc quét mã sản phẩm, tên sản phẩm').click().type(product1);
            cy.get('div').contains('Nhập hoặc quét mã sản phẩm, tên sản phẩm').click().type(product2);

    
            cy.get('input[type="text"]').eq(2).click().clear().type('{selectall}{del}'+ quality + '{del}', {delay:300});
            cy.wait(1000);
                
            cy.get('input[type="text"]').eq(2).click().clear().type('{selectall}{del}'+ quality + '{del}', {delay:300});
            cy.wait(1000);
            cy.get('input[placeholder="Nhập tiền khách đưa"]').click().clear().type("{selectall}{del}" + totalMoney +"{del}", {delay:300});
            cy.wait(1000);
            cy.get('input[placeholder="Ghi chú"]').click().clear().type( text, {dely:300});
            cy.wait(1000);
            cy.get('h5').contains('Nguồn khách hàng').click();
            cy.get('button.btn.btn-info.btn-payment').click();
            cy.wait(1000);
           
    
        });
    
        it.skip('Tiến trình 4 - Trả hàng bán - Back order detail', ()=>{
            cy.get('td').contains(orderCode).click();
            cy.get('button').contains('Trả hàng bán').click();
            cy.wait(3000);
            cy.get('input#mui-36[type="text"]').eq(0).click().clear().type(quality_back);
            cy.get('input#mui-37[type="text"]').eq(0).click().clear().type(quality_back);
            cy.get('input[placeholder="Ghi chú"]').click().clear().type( text + ' - Trả hàng bán', {dely:300});
            cy.get('button').contains('Trả hàng').click();


            
    
        });
    
    });
    
};

order(username, password, warehouseImport, product1,product2,quality, totalMoney,text, orderCode, quality_back);
