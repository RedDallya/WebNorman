import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  authURL = 'http://localhost:8080/auth';

   // Observable para el estado de autenticación
   private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario).pipe(
      // Actualizar el estado de autenticación después de un registro exitoso
      tap(() => this.isLoggedSubject.next(true))
    );
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario).pipe(
      // Actualizar el estado de autenticación después de un inicio de sesión exitoso
      tap(() => this.isLoggedSubject.next(true))
    );
  }

  // Agregar una función para cerrar sesión que actualice el estado de autenticación
  public logout(): void {
    // Aquí puedes realizar cualquier acción necesaria para cerrar la sesión, como eliminar el token
    // Después, actualiza el estado de autenticación a "false"
    this.isLoggedSubject.next(false);
  }
}