<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('conversation.{id}', function ($user, $id) {
    return true; // Todos os agentes logados podem ouvir a conversa especifica
});

Broadcast::channel('inbox', function ($user) {
    return true; // Todos podem ouvir a fila global (em breve restrição via rbac)
});
