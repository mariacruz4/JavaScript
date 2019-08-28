class AddComponent{
    //bonus: the card displays at the bottom below the description
    constructor(){
        this.template = `
        <form style="margin-bottom:20px;">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Image Address</span>
                </div>
                <input type="text" id ="img" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
                </div>
                <input type="text" id="title" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Enter Description</label>
                <textarea class="form-control" id="description1" rows="3" placeholder="Description..." style="margin-top:10px;"></textarea>
            </div>
            <button type="submit" id="submit" class="btn btn-primary">Submit Book</button>
        </form>
        `
            document.addEventListener("click", function(e) {
                if(e.target && e.target.id == "submit"){
                let img = document.getElementById("img").value;
                let title = document.getElementById("title").value;
                let description1 = document.getElementById("description1").value;
                document.getElementById("root").innerHTML +=`
                <div class="card" style="width: 15rem; margin-top: 40%;" >
                <img src="${img}" class="card-img-top" alt="...">        
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <a href="#" id="btn6" class="btn btn-primary">Show Description</a>
                    </div>
                </div>
                    `
                    document.addEventListener("click", function(e){
                        if(e.target && e.target.id == "btn6"){
                            if(document.getElementById(`btn6`).innerText == "Show Description"){
                            document.getElementById("btn6").innerHTML= "Hide Description"
                            document.getElementById("btn6").style= "background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)"
                            document.getElementById("description").innerHTML = `
                        <h2 style="z-index:1;"><strong>Description</strong></h2>
                            <p>${description1}</p>
                            `
                        } else if(e.target && e.target.id == "btn6"){
                            if(document.getElementById(`btn6`).innerText == "Hide Description"){
                            document.getElementById("btn6").innerHTML = "Show Description"
                            document.getElementById("btn6").innerHTML = "Show Description"
                            document.getElementById("btn6").style= "Background:#007bff"
                            document.getElementById("description").innerHTML = `
                            <h2 style="z-index:1;"><strong>Description</strong></h2>
                            `
                        }
                    }
                }
            }) 
            }
        });
    }
}

class BookComponent{
    constructor(bookId,img,title, description){
        this.bookId = bookId;
        this.img = img;
        this.title = title;
        this.description = document.getElementById("description");
        this.template = `
        <div class="card" style="width: 15rem;z-index:1;">
        <img src="${img}" class="card-img-top" alt="...">        
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <a href="#" id="btn-${bookId}" class="btn btn-primary">Show Description</a>
            </div>
        </div>
        `
                        document.addEventListener("click", function(e){
                                if(e.target && e.target.id == "btn-1"){
                                    if(document.getElementById(`btn-1`).innerText == "Show Description"){
                                    document.getElementById("btn-1").innerHTML= "Hide Description"
                                    document.getElementById("btn-1").style= "background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)"
                                    document.getElementById("description").innerHTML = `
                                <h2><strong>Description</strong></h2>
                                    <p>"The novel charts the adventures of modern-day twelve-year-old Percy Jackson as he discovers he is a demigod, the son of a mortal woman and the Greek god Poseidon. Percy and his friends Annabeth Chase and Grover Underwood go on a quest to find Zeus's stolen lightning bolt and prevent a war among the gods Zeus, Poseidon, and Hades."</p>
                                    `
                                } else if(e.target && e.target.id == "btn-1"){
                                    if(document.getElementById(`btn-1`).innerText == "Hide Description"){
                                    document.getElementById("btn-1").innerHTML = "Show Description"
                                    document.getElementById("btn-1").style= "Background:#007bff"
                                    document.getElementById("description").innerHTML = `
                                    <h2><strong>Description</strong></h2>
                                    `
                                    }
                                }
                            }
                        }) 
                        document.addEventListener("click", function(e){
                            if(e.target && e.target.id == "btn-2"){
                                if(document.getElementById(`btn-2`).innerText == "Show Description"){
                                document.getElementById("btn-2").innerHTML= "Hide Description"
                                document.getElementById("btn-2").style= "background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)"
                                document.getElementById("description").innerHTML = `
                            <h2><strong>Description</strong></h2>
                                <p>"Laborers in California's dusty vegetable fields, they hustle work when they can, living a hand-to-mouth existence. For George and Lennie have a plan: to own an acre of land and a shack they can call their own. When they land jobs on a ranch in the Salinas Valley, the fulfillment of their dream seems to be within their grasp. But even George cannot guard Lennie from the provocations of a flirtatious woman, nor predict the consequences of Lennie's unswerving obedience to the things George taught him."</p>
                                `
                            } else if(e.target && e.target.id == "btn-2"){
                                if(document.getElementById(`btn-2`).innerText == "Hide Description"){
                                document.getElementById("btn-2").innerHTML = "Show Description"
                                document.getElementById("btn-2").innerHTML = "Show Description"
                                    document.getElementById("btn-2").style= "Background:#007bff"
                                document.getElementById("description").innerHTML = `
                                <h2><strong>Description</strong></h2>
                                `
                            }
                        }
                    }
                }) 
                document.addEventListener("click", function(e){
                    if(e.target && e.target.id == "btn-3"){
                        if(document.getElementById(`btn-3`).innerText == "Show Description"){
                        document.getElementById("btn-3").innerHTML= "Hide Description"
                        document.getElementById("btn-3").style= "background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)"
                        document.getElementById("description").innerHTML = `
                    <h2><strong>Description</strong></h2>
                        <p>"Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching..."</p>
                        `
                    } else if(e.target && e.target.id == "btn-3"){
                        if(document.getElementById(`btn-3`).innerText == "Hide Description"){
                        document.getElementById("btn-3").innerHTML = "Show Description"
                        document.getElementById("btn-3").innerHTML = "Show Description"
                        document.getElementById("btn-3").style= "Background:#007bff"
                        document.getElementById("description").innerHTML = `
                        <h2><strong>Description</strong></h2>
                        `
                    }
                }
            }
        }) 
        document.addEventListener("click", function(e){
            if(e.target && e.target.id == "btn-4"){
                if(document.getElementById(`btn-4`).innerText == "Show Description"){
                document.getElementById("btn-4").innerHTML= "Hide Description"
                document.getElementById("btn-4").style= "background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)"
                document.getElementById("description").innerHTML = `
                <h2><strong>Description</strong></h2>
                <p>"In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same."</p>
                `
            } else if(e.target && e.target.id == "btn-4"){
                if(document.getElementById(`btn-4`).innerText == "Hide Description"){
                document.getElementById("btn-4").innerHTML = "Show Description"
                document.getElementById("btn-4").innerHTML = "Show Description"
                document.getElementById("btn-4").style= "Background:#007bff"
                document.getElementById("description").innerHTML = `
                <h2><strong>Description</strong></h2>
                `
                }
            }   
        }
    }) 
    document.addEventListener("click", function(e){
        if(e.target && e.target.id == "btn-5"){
            if(document.getElementById(`btn-5`).innerText == "Show Description"){
            document.getElementById("btn-5").innerHTML= "Hide Description"
            document.getElementById("btn-5").style= "background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)"
            document.getElementById("description").innerHTML = `
        <h2><strong>Description</strong></h2>
            <p>"There are many voices in this novel: children's voices, adult voices, underground voices—but Holden's voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself. The pleasure he gives away, or sets aside, with all his heart. It is there for the reader who can handle it to keep."</p>
            `
        } else if(e.target && e.target.id == "btn-5"){
            if(document.getElementById(`btn-5`).innerText == "Hide Description"){
            document.getElementById("btn-5").innerHTML = "Show Description"
            document.getElementById("btn-5").innerHTML = "Show Description"
            document.getElementById("btn-5").style= "Background:#007bff"
            document.getElementById("description").innerHTML = `
            <h2><strong>Description</strong></h2>
            `
            }
        }
    }
    }) 
    }
}  

class BookListComponent{
    bookList =[
        {"bookId":1,"img":"https://www.bedrockcity.com/content/images/thumbs/0062901_percyjacksontheolympians_550.jpeg","title":"Percy Jackson & the Olympians: The Lightning Thief"},
        {"bookId":2,"img":"https://prodimage.images-bn.com/pimages/9780140177398_p0_v2_s550x406.jpg","title":"Of Mice and Men"},
        {"bookId":3,"img":"https://prodimage.images-bn.com/pimages/9780451524935_p0_v3_s550x406.jpg","title":"1984"},
        {"bookId":4,"img":"https://prodimage.images-bn.com/pimages/9781524763138_p0_v6_s550x406.jpg","title":"Becoming"},
        {"bookId":5,"img":"https://prodimage.images-bn.com/pimages/9780316769488_p0_v1_s550x406.jpg","title":"The Catcher in the Rye"}
    ] 
    template =  `
        <div>
        ${this.bookList.map(e => new BookComponent(e.bookId,e.img, e.title).template).join('')}
        </div>
        `
}
document.getElementById("add").innerHTML = `${new AddComponent().template}`
document.getElementById("root").innerHTML =  ` ${new BookListComponent().template}`;

