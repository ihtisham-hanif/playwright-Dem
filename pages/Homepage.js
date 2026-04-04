export class Homepage
{
    constructor(page){
        this.page=page;
        this.productlist=
        this.addtocartbtn='//a[normalize-space()="Add to cart"]';
        this.cart=''
    }

    async AddProductTocart(){
       const productlist= await this.page$.$$(this.productlist);
       for (product of productlist){ 
        if (prductname== await product.textcotent()){
            await product.click()
            break;
        }

       }
    
    await this.page.on('dialog', dialog => {
    if (dialog.message().includes('added'))
await dialog.accept();
})

await this.page.click(this.addtocartbtn)
}