

const username = 'hangptt';
const password = 'Hang@123';

const product1 = 'Sản phẩm test 1230';
const product2 = 'Sản phẩm test 1231';
const product3 = 'Sản phẩm test 1232';
const product4 = 'Sản phẩm test 1233';
const product5 = 'Sản phẩm test 1234';

const warehouseImport = 'Kho Food - Kho HolaMart Trường Chinh';


const quality = 100;

const price = 20000;
const fee = 50000;
const text = 'Test Sơ chế 2';


function preliminary_configuration(username, password, product1, product2, product3, product4, product5, quality, text) {
    describe('Tiến trình 2 - Step 1: Cấu hình sơ chế', () => {
        beforeEach(() => {
            cy.viewport(2000, 1280);
            cy.visit('http://192.168.100.198:8032/preliminary-configuration');
            cy.get("#username").type(username);
            cy.get("#password").type(password);
            cy.get('button').eq(1).click();
            cy.wait(1000);
            //Thêm mới phiếu
            cy.get('button').contains('Thêm mới').click();
            cy.wait(1000);
        });
        it('Cấu hình sơ chế  - Type: Sơ chế ' + product1 + " thành " + product2 + ', ' + product3, () => {

            //nhập thông tin
            cy.get('button[title="Open"]').eq(2).click();
            cy.get('button[title="Clear"]').eq(2).click();
            cy.get('input[role="combobox"]').eq(2).type('Sơ chế' + "{pageDown}{enter}");

            cy.get('input[role="combobox"]').eq(3).type(product1 + "{pageDown}{enter}", { delay: 500 });
            cy.wait(500);
            //nhập SL
            cy.get('input').eq(7).type(quality, { delay: 300 });
            cy.wait(200);
            //nhập tên cấu hình
            cy.get('input').eq(8).type(text + ' - Sơ chế', { delay: 300 });
            cy.wait(200);
            //chọn sp đầu ra
            cy.get('input[role="combobox"]').eq(6).type(product2 + "{pageDown}{enter}", { delay: 500 });
            cy.wait(500);
            //nhập SL sp đầu ra
            cy.get('input').eq(12).type(quality - 2, { delay: 300 });
            cy.wait(200);
            //thêm mới 1 spa đầu ra
            cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').click();
            cy.get('input[role="combobox"]').eq(8).type(product3 + "{pageDown}{enter}", { delay: 500 });
            cy.get('input[placeholder="Sô lượng thực tế (*)"]').eq(1).type(2, { delay: 300 });
            cy.wait(300);


            //lưu phiếu
            //   cy.get('button').contains('Hủy').click();
            cy.get('button[type="submit"]').contains('Thêm mới').click();
        });

        it.skip('Cấu hình sơ chế  - Type: Chuyển đổi' + product3 + " thành " + product4 + ', ' + product5, () => {

            //nhập thông tin
            cy.get('button[title="Open"]').eq(2).click();
            cy.get('button[title="Clear"]').eq(2).click();
            cy.get('input[role="combobox"]').eq(2).type('Chuyển đổi' + "{pageDown}{enter}");

            cy.get('input[role="combobox"]').eq(3).type(product3 + "{pageDown}{enter}", { delay: 500 });
            cy.wait(500);
            //nhập SL
            cy.get('input').eq(7).type(quality * 2, { delay: 300 });
            cy.wait(200);
            //nhập tên cấu hình
            cy.get('input').eq(8).type(text + '- Chuyển đổi ', { delay: 300 });
            cy.wait(200);
            //chọn sp đầu ra
            cy.get('input[role="combobox"]').eq(6).type(product4 + "{pageDown}{enter}", { delay: 500 });
            cy.wait(500);
            //nhập SL sp đầu ra
            cy.get('input').eq(12).type(quality * 2 - 2, { delay: 300 });
            cy.wait(200);
            //thêm mới 1 spa đầu ra
            cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').click();
            cy.get('input[role="combobox"]').eq(8).type(product5 + "{pageDown}{enter}", { delay: 500 });
            cy.get('input[placeholder="Sô lượng thực tế (*)"]').eq(1).type(2, { delay: 300 });
            cy.wait(300);
            //lưu phiếu
            //   cy.get('button').contains('Hủy').click();
            cy.get('button[type="submit"]').contains('Thêm mới').click();
        });
    });
};
function preliminary_export(username, password, warehouseImport, product1, price, fee, product3, quality, text) {
    describe('Tiến trình 2 - Step 2: Xuất sơ chế', () => {
        beforeEach(() => {
            cy.viewport(2000, 1280);
            cy.visit('http://192.168.100.198:8032/preliminary-exportation');
            cy.get("#username").type(username);
            cy.get("#password").type(password);
            cy.get('button').eq(1).click();
            cy.wait(1000);
            //Thêm mới phiếu
            cy.get('button').contains('Thêm mới').click();
            cy.wait(1000);
        });
        it.only('Cấu hình sơ chế  - Type: Sơ chế ', () => {

            //nhập thông tin
            cy.get('button[title="Open"]').eq(2).click();
            cy.get('button[title="Clear"]').eq(2).click();
            cy.get('input[role="combobox"]').eq(2).type('Sơ chế' + "{pageDown}{enter}");

            cy.get('button[title="Open"]').eq(3).click();
            cy.get('button[title="Clear"]').eq(3).click();
            cy.get('input[role="combobox"]').eq(3).type(warehouseImport + "{pageDown}{enter}");
            cy.wait(200);


            //nhập sp
            cy.get('input[role="combobox"]').eq(0).type(product1 + "{pageDown}{enter}");
            cy.get('input[role="combobox"]').eq(1).type('Sơ chế' + "{pageDown}{enter}");
            // nhập sl
            cy.get('input[placeholder="Nhập Số lượng xuất"]').type(quality + "{pageDown}{enter}");
            cy.get('input[placeholder="Nhập giá xuất"]').click().type('{selectall}{del}' + price + '{del}', { delay: 300 });
            cy.get('input[placeholder="Nhập chi phí"]').click().clear().type('{del}' + fee + '{del}', { delay: 300 });
            cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(0).click().clear().type('{del}' + (quality/2) + '{del}', { delay: 300 });
            cy.wait(300);
            cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(2).click().clear().type('{del}' + (quality/2) + '{del}', { delay: 300 });
            cy.wait(1000);
            cy.get('input[name="note"]').type(text + ' - Sơ chế', { delay: 300 });
            cy.wait(300);

            //lưu phiếu
            //   cy.get('button').contains('Lưu tạm').click();
            cy.get('button').contains('Hoàn thành').click();
            cy.wait(300);


        });

        it('Cấu hình sơ chế  - Type: Chuyển đổi', () => {

            //nhập thông tin
            cy.get('button[title="Open"]').eq(2).click();
            cy.get('button[title="Clear"]').eq(2).click();
            cy.get('input[role="combobox"]').eq(2).type('Chuyển đổi' + "{pageDown}{enter}");

            cy.get('button[title="Open"]').eq(3).click();
            cy.get('button[title="Clear"]').eq(3).click();
            cy.get('input[role="combobox"]').eq(3).type(warehouseImport + "{pageDown}{enter}");
            cy.wait(200);

            //nhập sp
            cy.get('input[role="combobox"]').eq(0).type(product3 + "{pageDown}{enter}");
            cy.get('input[role="combobox"]').eq(1).type('Sơ chế' + "{pageDown}{enter}");
            // nhập sl
            cy.get('input[placeholder="Nhập Số lượng xuất"]').type(quality + "{pageDown}{enter}");
            cy.get('input[placeholder="Nhập giá xuất"]').click().type('{selectall}{del}' + price + '{del}', { delay: 300 });
            cy.get('input[placeholder="Nhập chi phí"]').click().clear().type('{del}' + fee + '{del}', { delay: 300 });
            cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(0).click().clear().type('{del}' + (quality - 2) + '{del}', { delay: 300 });
            cy.wait(300);
            cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(2).click().clear().type('{del}' + 2 + '{del}', { delay: 300 });
            cy.wait(1000);
            cy.get('input[name="note"]').clear().type(text + ' - Chuyển đổi', { delay: 300 });
            cy.wait(300);

            //lưu phiếu
            //   cy.get('button').contains('Lưu tạm').click();
            cy.get('button').contains('Hoàn thành').click().click();
            cy.wait(300);

        });
    });

}

// preliminary_configuration(username, password, product1,product2,product3, product4,product5,quality, text);

preliminary_export(username, password, warehouseImport, product1, price, fee, product3, quality, text);