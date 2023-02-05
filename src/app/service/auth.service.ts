import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { User } from "../model/user";

@Injectable ({providedIn: 'root'})
export class AuthService {

    constructor(private router: Router) {}

    private users: User[] = [
        {
            id: 1,
            username: 'admin',
            password: '1234',
            role: 'admin'
        },
        {
            id: 2,
            username: 'user',
            password: '1234',
            role: 'user',
        },
        {
            id: 3,
            username: 'moderator',
            password: '1234',
            role: 'moderator',
        }
    ];

    private loggedUserSubject = new BehaviorSubject<User | null>(null);
    
    readonly loggedUser$ = this.loggedUserSubject.asObservable();
    readonly isLogged$ = this.loggedUser$.pipe(
        map(loggedUser => loggedUser !== null),
    );
    // Unicamente quando il ruolo dell'utente e admin avrà accesso a certe navigation.
    readonly isAdmin$ = this.loggedUser$.pipe(
        map((logged) => logged?.role === 'admin')
    );
    // Unicamente quando il ruolo dell'utente e moderator avrà accesso a certe navigation.
    readonly isModerator$ = this.loggedUser$.pipe(
        map((logged) => logged?.role === 'moderator' || logged?.role === 'admin')
    );

    login(username: string, password: string) {
        const exisitingUser = this.users.find(
            u => u.username === username && u.password === password
        );

        this.loggedUserSubject.next(exisitingUser!);

        return !!exisitingUser;
    }

    logout() {
        this.loggedUserSubject.next(null);

        this.router.navigateByUrl('/')
    }

    getUsers() {
        return this.users.slice();
    }

    getUserById(id: number) {
        return this.users.find(u => u.id === id);
    }

    private lastId = 3;

    addUser(user: Omit<User, 'id'>) {
        const newUser: User = {
            id: this.lastId++,
            ...user
        };

        this.users.push(newUser);
    }

}