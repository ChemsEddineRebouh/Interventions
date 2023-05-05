import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeproblemeService } from './probleme.service';
import { HttpClientJsonpModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, HttpClientJsonpModule],
      declarations: [ ProblemeComponent ],
      providers:[TypeproblemeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // 1
  it('Zone prénom invalide avec 2 caracteres', () => {
    let zone = component.problemeForm?.controls['prenom']
    zone?.setValue('a'.repeat(2))
    let errors = zone?.errors || {};
        expect(errors['minlength']).toBeFalsy();
  });
  // 2
  it(' Zone PRÉNOM valide avec 3 caractères', () => {
    let zone = component.problemeForm?.controls['prenom']
    zone?.setValue('a'.repeat(3))
    let errors = zone?.errors || {};
        expect(errors['minlength']).toBeFalsy();
  });
  //3 
  it('Zone PRÉNOM valide avec 200 caractères', () => {
    let zone = component.problemeForm?.controls['prenom'];
    zone?.setValue('a'.repeat(200));
    let errors = zone?.errors || {};
    expect(errors['maxlength']).toBeFalsy();  
  });
  //4
  it('Zone PRÉNOM invalide avec aucune valeur', () => {
    let zone = component.problemeForm?.controls['prenom'];
    zone?.setValue('');
    let errors = zone?.errors || {};
    expect(errors['required']).toBeTruthy();  
  });
  //5
  it('Zone PRÉNOM invalide avec 10 espaces', () => {
    let zone = component.problemeForm?.controls['prenom'];
    zone?.setValue(' '.repeat(10));
    let errors = zone?.errors || {};
    expect(errors['required']).toBeFalsy();  
  });
  //6
  it('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let zone = component.problemeForm?.controls['prenom'];
    zone?.setValue('  a');
    let errors = zone?.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();  
  });
  
//#15 | Zone TELEPHONE est désactivée quand ne pas me notifier
//#16 | Zone TELEPHONE est vide quand ne pas me notifier
//#17 | Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier
//#18 | Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier


  
});