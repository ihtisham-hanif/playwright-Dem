export class Homepage {
    constructor(page) {
        this.page = page;

        // locator for all product names
        this.productlist = '.hrefch';

        // Add to cart button
        this.addtocartbtn = '//a[normalize-space()="Add to cart"]';
    }

    async AddProductTocart(productName) {

        const products = await this.page.$$(this.productlist);
        console.log(products)

        for (const product of products) {
            const name = await product.textContent();

            if (name.trim().toLowerCase() === productName.toLowerCase()) {
                await product.click();
                break;
            }
        }

        // handle alert popup
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.page.click(this.addtocartbtn);
    }
}