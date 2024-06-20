const username = 'hangptt';
const password = 'Hang@123';
const warehouseImport = "Trường Chinh";
const product1 = 'Sản phẩm test 1235';
const product2 = 'Sản phẩm test 1234';
const product3 = 'Sản phẩm test 1233';
const product4 = 'Sản phẩm test 1234';
const product5 = 'Sản phẩm test 1231';
const quality = 10;
const totalMoney = 50000;
const text = "Tiến trình 3 ";
const category = 'Đồ uống';
const quality_import = 25;

const exportCode = 'XCB1000081';


function process_config(username, password, product1, quality, text) {
    describe('Tiến trình 3: Xuất chế biến - Cấu hình chế biến', () => {
        beforeEach(() => {
            cy.viewport(2000, 1280);
            cy.visit('http://192.168.100.198:8032/process-config');
            cy.get("#username").type(username);
            cy.get("#password").type(password);
            cy.get('button').eq(1).click();
            cy.wait(1000);
            //Thêm mới phiếu


        });
        it('Cấu hình chế biến', () => {
            //Thêm mới phiếu
            cy.get('button').contains('Thêm mới').click();
            cy.get('input#mui-4').type(product1 + "{pageDown}{enter}", { delay: 200 });
            cy.get('#mui-4-option-0').eq(0).click();
            cy.wait(500);
            cy.get('input#mui-7').type(text + 'Chế biến', { delay: 200 });
            cy.get('input#mui-8').type(quality, { delay: 200 });
            //Chọn danh mục
            cy.get('input#mui-13').type(category, { delay: 200 });
            cy.get('#mui-13-option-0').eq(0).click();
            cy.wait(1000);
            cy.get('button[title="Open"]').eq(5).click().type('Kg' + "{pageDown}{enter}");
            // cy.get('button[title="Clear"]').eq(5).click();
            cy.wait(1000);

            // cy.get('#mui-36-option-2').eq(0).click();

            cy.get('input#mui-16').type(quality - 2, { delay: 200 });
            cy.wait(500);
            cy.get('input[type="text"]').eq(11).type(0, { delay: 200 });

            cy.get('button[type="submit"]').eq(1).click();

        })
    });
};
function process_exportation(username, password,warehouseImport,product1,product2,product3, product4, quality, quality_import, totalMoney,text, exportCode) {

    describe('Tiến trình 3: Xuất chế biến - Tạo phiếu xuất chế biến', () => {
        beforeEach(() => {
            cy.viewport(2000, 1280);
            cy.visit('http://192.168.100.198:8032/process-exportation');
            cy.get("#username").type(username);
            cy.get("#password").type(password);
            cy.get('button').eq(1).click();
            cy.wait(1000);
            //Thêm mới phiếu


        });
        it('Xuất chế biến', () => {
            //Thêm mới phiếu
            cy.get('button').contains('Thêm mới').click();


            cy.get('input#mui-8').clear().type('{selectall}{del}' + warehouseImport + "{pageDown}{enter}", { delay: 300 });
            cy.wait(200);

            cy.get('input#mui-10').click().type(product1 + "{pageDown}{enter}", { delay: 300 });
            cy.get('input[placeholder="Nhập số lượng dự kiến"]').clear().type(quality_import);
            cy.get('input[type="text"]').eq(4).clear().type(totalMoney);
            cy.get('input[name="note"]').clear().type(text + ' - Auto chế biến');

            //Kiểm tra phiếu
            cy.get('button').contains('Kiểm tra phiếu').click();
            cy.get('input[placeholder="Chọn sản phẩm"]').eq(1).click().type(product2 + "{pageDown}{enter}", { delay: 300 });

            //click thêm 1 sp
            cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').eq(1).click();
            cy.get('input[placeholder="Chọn sản phẩm"]').eq(2).click().type(product3 + "{pageDown}{enter}", { delay: 300 });
            //click thêm 1 sp
            cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-1j7qk7u').eq(2).click();
            cy.get('input[placeholder="Chọn sản phẩm"]').eq(3).click().type(product4 + "{pageDown}{enter}", { delay: 300 });

            //nhập sl dự kiến
            cy.get('input[placeholder="Nhập Số lượng dự kiến"]').eq(0).clear().type(quality);
            cy.get('input[placeholder="Nhập Số lượng dự kiến"]').eq(1).clear().type(quality);
            cy.get('input[placeholder="Nhập Số lượng dự kiến"]').eq(2).clear().type(quality);

            //Kiểm tra phiếu
            cy.get('button').contains('Kiểm tra phiếu').click();
            cy.get('button').contains('Nhập dự kiến').click();





        });

        it.only('Hoàn thành phiếu xuất chế biến',()=>{
            cy.get('td').contains(exportCode).click();
            cy.get('button').contains('Chỉnh sửa').click();
            cy.wait(1000);
            cy.get('button').contains('Hoàn thành').click();



        })

    });
}

// process_config(username, password, product1,quality,text);
// process_exportation(username, password,warehouseImport,product1,product2,product3, product4, quality, quality_import, totalMoney,text, exportCode);
