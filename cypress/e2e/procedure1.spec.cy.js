describe('Tiến trình 1: Nhập hàng', () => {
  beforeEach(()=>{
    cy.viewport(1280, 1080);
    cy.visit('http://192.168.100.198:8032/goodReceived');
    cy.get("#username").type('hangptt');
    cy.get("#password").type('Hang@123');
    cy.get('button').eq(1).click();
  })
  it('Importation - Nhập hàng từ NCC', () => {
    //Thêm mới phiếu
    cy.get('button').contains('Thêm mới').click();
    //nhập thông tin
    cy.get('button[title="Open"]').eq(0).click();
    cy.get('button[title="Clear"]').eq(0).click();
    cy.get('input[name = "importWarehouseAgencyId"]').type("Kho Food - Kho HolaMart Trường Chinh{pageDown}{enter}");

    cy.get('button[title="Open"]').eq(1).type("NCC test PTDV{pageDown}{enter}");
    cy.wait(200);

    //Chọn sp
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1200{enter}');
    cy.wait(200);
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1201{enter}');
    cy.wait(200);
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1203{enter}');
    cy.wait(200);
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1204{enter}');
    cy.wait(500);

    //Nhập SL
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(3).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá nhập"]').eq(3).click().clear().type('10000',{delay:300});

    cy.wait(500);
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(2).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá nhập"]').eq(2).click().clear().type('20000',{delay:300});

    cy.wait(500);
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(1).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá nhập"]').eq(1).click().clear().type('30000',{delay:300});

    cy.wait(500);
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(0).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá nhập"]').eq(0).click().clear().type('40000',{delay:300});

    cy.wait(500);
    cy.get('input[name="note"]').eq(0).clear().type('Automotive update average cost',{delay:50});

    //lưu phiếu
    // cy.get('button').contains('Lưu tạm').click();
    // cy.get('button').contains('Hoàn thành').click();
  })
});

describe('Tiến trình 1: Chuyển hàng ', () => {
  beforeEach(()=>{
    cy.viewport(1280, 1080);
    cy.visit('http://192.168.100.198:8032/shipping-management');
    cy.get("#username").type('hangptt');
    cy.get("#password").type('Hang@123');
    cy.get('button').eq(1).click();
  })
  it('Transfer goods - Chuyển hàng', () => {
    //Thêm mới phiếu
    cy.get('button').contains('Thêm mới').click();
    //nhập thông tin
    cy.get('button[title="Open"]').eq(0).click();
    cy.wait(500);
    cy.get('button[title="Clear"]').eq(0).click();
    cy.get('input[name = "exchangeWarehouseAgencyId"]').type("Kho Food - Kho HolaMart Trường Chinh{pageDown}{enter}");

    cy.get('input[name = "receiveWarehouseAgencyId"]').type("Kho Food - Chi nhánh test PTDV{pageDown}{enter}");
    // cy.get('button[title="Open"]').eq(1).type("NCC test PTDV{pageDown}{enter}");
    cy.wait(200);

    //Chọn sp
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1200{enter}');
    cy.wait(200);
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1201{enter}');
    cy.wait(200);
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1203{enter}');
    cy.wait(200);
    cy.get('.css-1hw1n1g-placeholder').click().type('MOON.01.TEST.1204{enter}');
    cy.wait(500);

    //Nhập SL
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(3).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá chuyển"]').eq(3).clear().type('10000',{delay:300});

    cy.wait(500);
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(2).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá chuyển"]').eq(2).clear().type('20000',{delay:300});

    cy.wait(500);
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(1).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá chuyển"]').eq(1).clear().type('30000',{delay:300});

    cy.wait(500);
    cy.get('input[placeholder="Nhập Số lượng thực nhập"]').eq(0).clear().type('{del}100');
    cy.get('input[placeholder="Nhập giá chuyển"]').eq(0).clear().type('40000',{delay:300});

    cy.wait(500);
    cy.get('input[name="note"]').eq(0).clear().type('Automotive update average cost',{delay:50});

    //lưu phiếu
    cy.get('button').contains('Lưu tạm').click();
  });
  it.skip('Transfer goods - Nhận hàng', () => {

});
})