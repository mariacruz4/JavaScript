class BookComponent{

    constructor(img,title, description){
        this.img = img;
        this.title = title;
        this.description = document.getElementById("description");
        this.template = `
        <div class="card" style="width: 15rem;">
        <img src="${this.img}" class="card-img-top" alt="...">        
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                ${new ButtonComponent().template}
            </div>
        </div>
        `
            document.addEventListener("click", function(e){
                if(e.target && e.target.id == "btn1"){
                    document.getElementById("root").innerHTML =`
                    <div class="card" style="width: 15rem;">
                    <img src="${img}" class="card-img-top" alt="...">        
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <a href="#" id="btn2" class="btn btn-primary" style="background:red">Hide Description</a>
                        </div>
                    </div>
                    `
                    document.getElementById("description").innerHTML = `
                   <h2><strong>Description</strong></h2>
                    <p>${description}</p>
                    `
                } else if(e.target && e.target.id == "btn2"){
                    document.getElementById("root").innerHTML = `
                    <div class="card" style="width: 15rem;">
                    <img src="${img}" class="card-img-top" alt="...">        
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <a href="#" id="btn1" class="btn btn-primary">Show Description</a>
                        </div>
                    </div>
                    `   
                    document.getElementById("description").innerHTML = `
                    <h2><strong>Description</strong></h2>
                    `
                }
            })
        }
    }   
class BookListComponent{
    bookList =[
        {"img":"https://www.bedrockcity.com/content/images/thumbs/0062901_percyjacksontheolympians_550.jpeg","title":"Percy Jackson & the Olympians: The Lightning Thief", "description":"The novel charts the adventures of modern-day twelve-year-old Percy Jackson as he discovers he is a demigod, the son of a mortal woman and the Greek god Poseidon. Percy and his friends Annabeth Chase and Grover Underwood go on a quest to find Zeus's stolen lightning bolt and prevent a war among the gods Zeus, Poseidon, and Hades."},
        {"img":"https://prodimage.images-bn.com/pimages/9780140177398_p0_v2_s550x406.jpg","title":"Of Mice and Men", "description":"Laborers in California's dusty vegetable fields, they hustle work when they can, living a hand-to-mouth existence. For George and Lennie have a plan: to own an acre of land and a shack they can call their own. When they land jobs on a ranch in the Salinas Valley, the fulfillment of their dream seems to be within their grasp. But even George cannot guard Lennie from the provocations of a flirtatious woman, nor predict the consequences of Lennie's unswerving obedience to the things George taught him."},
        {"img":"https://prodimage.images-bn.com/pimages/9780451524935_p0_v3_s550x406.jpg","title":"1984", "description":"Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching..."},
        {"img":"https://prodimage.images-bn.com/pimages/9781524763138_p0_v6_s550x406.jpg","title":"Becoming", "description":"In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same."},
        {"img":"https://prodimage.images-bn.com/pimages/9780316769488_p0_v1_s550x406.jpg","title":"The Catcher in the Rye", "description":"There are many voices in this novel: children's voices, adult voices, underground voices—but Holden's voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself. The pleasure he gives away, or sets aside, with all his heart. It is there for the reader who can handle it to keep."}
    ] 
    template =  `
        <div>
        ${this.bookList.map(e => new BookComponent(e.img, e.title, e.description).template).join('')}
        </div>
        `
}
document.getElementById("root").innerHTML =  ` ${new BookListComponent().template}`;