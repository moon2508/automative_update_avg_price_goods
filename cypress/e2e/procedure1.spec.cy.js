const username = 'hangptt';
const password = 'Hang@123';

const product1 = 'MOON.01.TEST.1240';
const product2 = 'MOON.01.TEST.1241';
const product3 = 'MOON.01.TEST.1243';
const product4 = 'MOON.01.TEST.1244';
const warehouseImport = 'Kho Food - Kho HolaMart Trường Chinh';
const warehouseReceive = 'Kho Food - Chi nhánh test PTDV';
const provider = 'NCC test PTDV';
const quality = 100;
const quality_transfer = 10;
const quality_cancel = 5;
const quality_back = 5;
const quality_adjust = 2;
const price = 12000;
const price_adjust = 20000;
const text = 'Auto change aver cost';
const exchangeCode ='PC1000226';

const cancellationCode = 'PH1000088';
const backImportCode = 'PTH1000056';
const inventoryCode = 'PKK100000098';
const exchangeCode_pending ='PC1000230';
const importationCode="IMP1000666";


function importation(username, password, warehouseImport,provider, product1,product2,product3, product4,quality, price, text){
  describe('Tiến trình 1 - Step 1: Nhập hàng', () => {
    beforeEach(()=>{
      cy.viewport(2000, 1280);
      cy.visit('http://192.168.100.198:8032/goodReceived');
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button').eq(1).click();
    })
    it('Importation - Nhập hàng từ NCC', () => {
      //Thêm mới phiếu
      cy.get('button').contains('Thêm mới').click();
      //nhập thông tin
      cy.get('button[title="Open"]').eq(0).click();
      cy.get('button[title="Clear"]').eq(0).click();
      cy.get('input[name = "importWarehouseAgencyId"]').type(warehouseImport +"{pageDown}{enter}");
  
      cy.get('button[title="Open"]').eq(1).type(provider + "{pageDown}{enter}");
      cy.wait(200);
  
      //Chọn sp
      cy.get('.css-1hw1n1g-placeholder').click().type(product1 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product2 +'{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product3 +'{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product4 +'{enter}');
      cy.wait(500);
  
      //Nhập SL
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(3).click().clear().type('{del}'+quality+'{del}',{delay:200});
      cy.wait(1000);
      cy.get('input[placeholder="Nhập giá nhập"]').eq(3).click().clear().type('{selectall}'+price,{delay:300});
  
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(2).click().clear().type('{del}'+quality+'{del}',{delay:200});
      cy.wait(1000);
      cy.get('input[placeholder="Nhập giá nhập"]').eq(2).click().clear().type('{selectall}'+price*2,{delay:300});
  
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(1).click().clear().type('{del}'+quality+'{del}',{delay:200});
      cy.wait(1000);
      cy.get('input[placeholder="Nhập giá nhập"]').eq(1).click().clear().type('{selectall}'+price*3,{delay:300});
  
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(0).click().clear().type('{del}'+quality+'{del}',{delay:200});
      cy.wait(1000);
      cy.get('input[placeholder="Nhập giá nhập"]').eq(0).click().clear().type('{selectall}'+price*4,{delay:300});
  
      cy.wait(500);
      cy.get('input[name="note"]').eq(0).clear().type(text,{delay:50});
  
      //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click();
      cy.get('button').contains('Hoàn thành').click();
    })
  });
};

function exchange(username,password,warehouseImport,warehouseReceive, product1,product2,product3,product4,quality_transfer,text, exchangeCode){
  describe('Tiến trình 1 - Step 2: Chuyển hàng ', () => {
    beforeEach(()=>{
      cy.viewport(2000, 1280);
      cy.visit('http://192.168.100.198:8032/shipping-management');
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button').eq(1).click();
    })
    it('Transfer goods - Chuyển hàng', () => {
      //Thêm mới phiếu
      cy.get('button').contains('Thêm mới').click();
      //nhập thông tin
      cy.get('button[title="Open"]').eq(0).click();
      cy.wait(500);
      cy.get('button[title="Clear"]').eq(0).click();
      cy.get('input[name = "exchangeWarehouseAgencyId"]').type(warehouseImport + "{pageDown}{enter}");
  
      cy.get('input[name = "receiveWarehouseAgencyId"]').type(warehouseReceive+"{pageDown}{enter}");
    
      cy.wait(200);
  
      //Chọn sp
      cy.get('.css-1hw1n1g-placeholder').click().type(product1 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product2 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product3 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product4 + '{enter}');
      cy.wait(500);
  
      //Nhập SL
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(3).click().clear().type('{del}'+ quality_transfer+ '{del}',{delay:300});
      
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(2).click().clear().type('{del}'+quality_transfer+'{del}',{delay:300});
      
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(1).click().clear().type('{del}'+quality_transfer+'{del}',{delay:300});
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(0).click().clear().type('{del}'+quality_transfer+'{del}',{delay:300});
      
      cy.wait(500);
      cy.get('input[name="note"]').eq(0).clear().type(text,{delay:50});
  
      // cy.get('input[placeholder="Nhập giá chuyển"]').eq(3).clear().type('15000',{delay:300});
      // cy.get('input[placeholder="Nhập giá chuyển"]').eq(2).clear().type('25000',{delay:300});
      // cy.get('input[placeholder="Nhập giá chuyển"]').eq(1).clear().type('35000',{delay:300});
      // cy.get('input[placeholder="Nhập giá chuyển"]').eq(0).clear().type('45000',{delay:300});
  
      //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click();
      cy.get('button').contains('Hoàn thành').click();
    });
    it.skip('Transfer goods - Nhận hàng', () => {
      cy.get('td').contains(exchangeCode).click();
      cy.get('button').contains('Nhận hàng').click();
      cy.wait(1000);
      cy.get('input[name="note"]').type(text +  ' - Nhận hàng',{delay:100})
       //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click();
      // cy.get('button').contains('Hoàn thành').click();
  });
  });
};

function cancellation(username, password, warehouseImport, product1,product2,product3,product4,quality_cancel,text){
  describe('Tiến trình 1 - Step 4: Xuất hủy', () => {
    beforeEach(()=>{
      cy.viewport(2000, 1280);
      cy.visit('http://192.168.100.198:8032/cancellation-ticket');
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button').eq(1).click();
      cy.wait(500);
    })
    it('Cancellation - Xuất hủy', () => {
      //Thêm mới phiếu
      cy.get('button').contains('Thêm mới').click();
      //nhập thông tin
      cy.get('button[title="Open"]').eq(0).click();
      cy.get('button[title="Clear"]').eq(0).click();
      cy.get('input[name = "exchangeAgencyId"]').type(warehouseImport + "{pageDown}{enter}");
  
      cy.get('input[name = "receiveAgencyId"]').type("Xuất hủy do hư hỏng{pageDown}{enter}");
      cy.wait(200);
  
      //Chọn sp
      cy.get('.css-1hw1n1g-placeholder').click().type(product1 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product2 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product3 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product4 + '{enter}');
      cy.wait(500);
  
      //Nhập SL
      cy.get('input[placeholder="Nhập Số lượng hủy"]').eq(3).clear().type('{del}'+quality_cancel);
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng hủy"]').eq(2).clear().type('{del}'+quality_cancel);
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng hủy"]').eq(1).clear().type('{del}'+quality_cancel);
      cy.wait(500);
      cy.get('input[placeholder="Nhập Số lượng hủy"]').eq(0).clear().type('{del}'+quality_cancel);
      cy.wait(500);
      cy.get('input[name="note"]').eq(0).clear().type(text);
  
      cy.wait(500);
      //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click().click();
      cy.get('button.btn-success').click().click();
      cy.get('button.btn.btn-danger').contains('Đồng ý').click();

      
    })
  });
};

function backImport(username, password, warehouseImport, provider, product1,product2,product3,product4,quality_back, text){
  describe('Tiến trình 1 - Step 4: Trả hàng nhập', () => {
    beforeEach(()=>{
      cy.viewport(2000, 1280);
      cy.visit('http://192.168.100.198:8032/merchandiseReturned');
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button').eq(1).click();
      cy.wait(500);
    })
    it('Back importation - Trả hàng nhập', () => {
      //Thêm mới phiếu
      cy.get('button').contains('Thêm mới').click();
      //nhập thông tin
      cy.get('button[title="Open"]').eq(0).click();
      cy.get('button[title="Clear"]').eq(0).click();
      cy.get('input[name = "warehouseBackAgencyId"]').type(warehouseImport + "{pageDown}{enter}");
  
      cy.get('input[name = "warehouseReceiveAgencyId"]').type(provider + "{pageDown}{enter}");
      cy.wait(200);
  
      //Chọn sp
      cy.get('.css-1hw1n1g-placeholder').click().type(product1 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product2 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product3 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product4 + '{enter}');
      cy.wait(500);
  
      //Nhập SL
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(3).click().clear().type('{del}'+quality_back+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(2).click().clear().type('{del}'+quality_back+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(1).click().clear().type('{del}'+quality_back+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(0).click().clear().type('{del}'+quality_back+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[name="note"]').eq(0).clear().type(text);
  
      cy.wait(500);
      //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click();
      cy.get('button.btn-success').click();
      
    })
  });

};

function checkInventory(username,password,warehouseImport,product1,product2,product3, product4, quality, text){
  describe('Tiến trình 1 - Step 4: Kiểm kho', () => {
    beforeEach(()=>{
      cy.viewport(2000, 1280);
      cy.visit('http://192.168.100.198:8032/inventory');
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button').eq(1).click();
      cy.wait(500);
    })
    it('Check warehouse - Kiểm kho', () => {
      //Thêm mới phiếu
      cy.get('button').contains('Thêm mới').click();
      //nhập thông tin
      cy.get('input[name = "warehouseAgencyAuditId"]').type(warehouseImport + "{pageDown}{enter}");
      cy.wait(200);
  
      //Chọn sp
      cy.get('.css-1hw1n1g-placeholder').click().type(product1 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product2 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product3 + '{enter}');
      cy.wait(200);
      cy.get('.css-1hw1n1g-placeholder').click().type(product4 + '{enter}');
      cy.wait(500);
  
      //Nhập SL
      cy.get('input[placeholder="Số lượng thực tế"]').eq(3).click().clear().type('{del}'+quality+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Số lượng thực tế"]').eq(2).click().clear().type('{del}'+quality+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Số lượng thực tế"]').eq(1).click().clear().type('{del}'+quality+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Số lượng thực tế"]').eq(0).click().clear().type('{del}'+quality+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[name="note"]').eq(0).clear().type(text);
  
      cy.wait(500);
      //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click();
      cy.get('button.btn-success').click();
      
    })
  });
};

function adjustment(username, password, cancellationCode, backImportCode,inventoryCode,exchangeCode_pending,quality_adjust,text){
  describe('Tiến trình 1 - Step 5: Điều chỉnh các phiếu kho hàng', () => {
    beforeEach(()=>{
      cy.viewport(2000, 1280);
      cy.visit('http://192.168.100.198:8032/adjustment-ticket');
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button').eq(1).click();
      cy.wait(1000);
      //Thêm mới phiếu
     cy.get('button').contains('Thêm mới').click();
    })
    it('Adjustment - Xuất hủy', () => {
     
     //nhập thông tin
     cy.get('input[name = "exchangeAgencyId"]').eq(0).type('Xuất hủy' + "{pageDown}{enter}");
      cy.wait(200);
      cy.get('input[placeholder="Quét/nhập tìm mã phiếu gốc"]').eq(0).type(cancellationCode + "{enter}");
      cy.wait(200);
      cy.get('span').contains('Mã điều chỉnh').click();
  
      //Nhập SL
      cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(3).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(2).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(1).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(0).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
      cy.wait(700);
      cy.get('input[name="note"]').eq(0).clear().type(" "+ text + ' - Xuất hủy',{delay:300});
      cy.wait(500);
      //lưu phiếu
      // cy.get('button').contains('Lưu tạm').click();
      cy.get('button').contains('Duyệt').click();
      cy.get('button').contains('Đồng ý').click();
  
  
    }); 
  
    it('Adjustment - Trả hàng nhập', () => {
   //nhập thông tin
   cy.get('input[name = "exchangeAgencyId"]').eq(0).type('Trả hàng nhập' + "{pageDown}{enter}");
   cy.wait(200);
   cy.get('input[placeholder="Quét/nhập tìm mã phiếu gốc"]').eq(0).type(backImportCode + "{enter}");
   cy.wait(200);
   cy.get('span').contains('Mã điều chỉnh').click();
  
   //Nhập SL
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(3).click().clear().type('{del}'+quality_adjust *2+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(2).click().clear().type('{del}'+quality_adjust *2+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(1).click().clear().type('{del}'+quality_adjust *2+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(0).click().clear().type('{del}'+quality_adjust *2+'{del}', {delay:300});
   cy.wait(700);
  
   //lưu phiếu
   // cy.get('button').contains('Lưu tạm').click();
   cy.get('button').contains('Duyệt').click().click();
   cy.get('button').contains('Đồng ý').click();
    });  
    it('Adjustment - Kiểm kho', () => {
   //nhập thông tin
   cy.get('input[name = "exchangeAgencyId"]').eq(0).type('Kiểm kho' + "{pageDown}{enter}");
   cy.wait(200);
   cy.get('input[placeholder="Quét/nhập tìm mã phiếu gốc"]').eq(0).type(inventoryCode + "{enter}");
   cy.wait(200);
   cy.get('span').contains('Mã điều chỉnh').click();
  
   //Nhập SL
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(3).click().clear().type('{del}'+quality_adjust*25+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(2).click().clear().type('{del}'+quality_adjust*25+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(1).click().clear().type('{del}'+quality_adjust*25+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(0).click().clear().type('{del}'+quality_adjust*25+'{del}', {delay:300});
   cy.wait(700);
   
   //lưu phiếu
   // cy.get('button').contains('Lưu tạm').click();
   cy.get('button').contains('Duyệt').click().click();
   cy.get('button').contains('Đồng ý').click();
    });

    it('Adjustment - Nhập hàng', ()=>{
         //nhập thông tin
   cy.get('input[name = "exchangeAgencyId"]').eq(0).type('Nhập hàng' + "{pageDown}{enter}");
   cy.wait(200);
   cy.get('input[placeholder="Quét/nhập tìm mã phiếu gốc"]').eq(0).type(importationCode + "{enter}");
   cy.wait(200);
   cy.get('span').contains('Mã điều chỉnh').click();

     //Nhập SL
     cy.get('input.MuiInputBase-input.MuiInput-input.css-mnn31[placeholder="Nhập"]').eq(6).click().clear().type('{del}'+price_adjust+'{del}', {delay:300});
     cy.wait(700);
     cy.get('input.MuiInputBase-input.MuiInput-input.css-mnn31[placeholder="Nhập"]').eq(4).click().clear().type('{del}'+price_adjust+'{del}', {delay:300});
     cy.wait(700);
     cy.get('input.MuiInputBase-input.MuiInput-input.css-mnn31[placeholder="Nhập"]').eq(2).click().clear().type('{del}'+price_adjust+'{del}', {delay:300});
     cy.wait(700);
     cy.get('input.MuiInputBase-input.MuiInput-input.css-mnn31[placeholder="Nhập"]').eq(0).click().clear().type('{del}'+price_adjust+'{del}', {delay:300});
     cy.wait(700);
     cy.get('button').contains('Duyệt').click().click();
   cy.get('button').contains('Đồng ý').click();
     

    })

    it('Adjustment - Chuyển hàng', () => {
   //nhập thông tin
   cy.get('input[name = "exchangeAgencyId"]').eq(0).type('Chuyến hàng' + "{pageDown}{enter}");
   cy.wait(200);
   cy.get('input[placeholder="Quét/nhập tìm mã phiếu gốc"]').eq(0).type(exchangeCode_pending + "{enter}");
   cy.wait(200);
   cy.get('span').contains('Mã điều chỉnh').click();
  
   //Nhập SL
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(3).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(2).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(1).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
   cy.wait(700);
   cy.get('input[placeholder="Nhập Số lượng thực tế"]').eq(0).click().clear().type('{del}'+quality_adjust+'{del}', {delay:300});
   cy.wait(700);
  
   //lưu phiếu
   // cy.get('button').contains('Lưu tạm').click();
   cy.get('button').contains('Duyệt').click().click();
   cy.get('button').contains('Đồng ý').click();
    });
  });
};


// importation(username, password, warehouseImport,provider, product1,product2,product3, product4,quality, price, text);
exchange(username,password,warehouseImport,warehouseReceive, product1,product2,product3,product4,quality_transfer,text, exchangeCode);
// cancellation(username, password, warehouseImport, product1,product2,product3,product4,quality_cancel,text);
// backImport(username, password, warehouseImport, provider, product1,product2,product3,product4,quality_back, text);
// checkInventory(username,password,warehouseImport,product1,product2,product3, product4, quality, text);
// adjustment(username, password, cancellationCode, backImportCode,inventoryCode,exchangeCode_pending,quality_adjust, price_adjust,text);

