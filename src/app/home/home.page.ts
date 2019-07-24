import { Component } from '@angular/core';

let catChracterArr:string[];
catChracterArr = ['catCharacter1', 'catCharacter2', 'catCharacter3', 'catCharacter4', 'catCharacter5', 'catCharacter6', 'catCharacter7', 'catCharacter8'];
let dogChracterArr:string[];
dogChracterArr = ['dogCharacter1', 'dogCharacter2', 'dogCharacter3', 'dogCharacter4', 'dogCharacter5', 'dogCharacter6', 'dogCharacter7', 'dogCharacter8'];
let ratChracterArr:string[];
ratChracterArr = ['ratCharacter1', 'ratCharacter2', 'ratCharacter3', 'ratCharacter4', 'ratCharacter5', 'ratCharacter6', 'ratCharacter7', 'ratCharacter8'];
let buttonArr:string[];
buttonArr = ['catbuttons', 'dogbuttons', 'ratbuttons'];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor() {}

  showType(data)
  {
    let i;
    for (i = 0; i < buttonArr.length; i++)
    {
      if(data != buttonArr[i]) 
      {
        document.getElementById(buttonArr[i]).style.display = 'none';
      }
    }
    document.getElementById(data).style.display = 'block';
  };

  showCats(data)
  {
    document.getElementById("dogPlaceHolder").style.display = 'none';
    document.getElementById("ratPlaceHolder").style.display = 'none';
    document.getElementById("catPlaceHolder").style.display = 'block';

    let i;
    for (i = 0; i < catChracterArr.length; i++)
    {
      if (data != catChracterArr[i])
      {
        document.getElementById(catChracterArr[i]).style.display = 'none';
      }
    }
    for (i = 0; i < dogChracterArr.length; i++)
    {
        document.getElementById(dogChracterArr[i]).style.display = 'none';
    }
    for (i = 0; i < ratChracterArr.length; i++)
    {
        document.getElementById(ratChracterArr[i]).style.display = 'none';
    }
    document.getElementById(data).style.display = 'block';
  }

  showDogs(data)
  {
    document.getElementById("catPlaceHolder").style.display = 'none';
    document.getElementById("ratPlaceHolder").style.display = 'none';
    document.getElementById("dogPlaceHolder").style.display = 'block';
    let i;
    for (i = 0; i < dogChracterArr.length; i++)
    {
      if (data != dogChracterArr[i])
      {
        document.getElementById(dogChracterArr[i]).style.display = 'none';
      }
    }
    for (i = 0; i < catChracterArr.length; i++)
    {
        document.getElementById(catChracterArr[i]).style.display = 'none';
    }
    for (i = 0; i < ratChracterArr.length; i++)
    {
        document.getElementById(ratChracterArr[i]).style.display = 'none';
    }
    document.getElementById(data).style.display = 'block';
  }

  showRats(data)
  {
    document.getElementById("catPlaceHolder").style.display = 'none';
    document.getElementById("dogPlaceHolder").style.display = 'none';
    document.getElementById("ratPlaceHolder").style.display = 'block';
    let i;
    for (i = 0; i < ratChracterArr.length; i++)
    {
      if (data != ratChracterArr[i])
      {
        document.getElementById(ratChracterArr[i]).style.display = 'none';
      }
    }
    for (i = 0; i < catChracterArr.length; i++)
    {
        document.getElementById(catChracterArr[i]).style.display = 'none';
    }
    for (i = 0; i < ratChracterArr.length; i++)
    {
        document.getElementById(ratChracterArr[i]).style.display = 'none';
    }
    document.getElementById(data).style.display = 'block';
  }

}
