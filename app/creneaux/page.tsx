"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface Creneau {
  id_creneaux: string;
  heure_debut: string;
  heure_fin: string;
}

export default function CreneauxPage() {
  const [creneaux, setCreneaux] = useState<Creneau[]>([]);
  const [newCreneau, setNewCreneau] = useState({
    id_creneaux: "",
    heure_debut: "",
    heure_fin: "",
  });
  const [editMode, setEditMode] = useState<string | null>(null);

  useEffect(() => {
    fetchCreneaux();
  }, []);

  async function fetchCreneaux() {
    try {
      const response = await fetch('/api/creneaux');
      if (!response.ok) throw new Error('Failed to fetch creneaux');
      const data = await response.json();
      setCreneaux(data);
    } catch (error) {
      console.error('Error fetching creneaux:', error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url = editMode !== null ? `/api/creneaux/${editMode}` : '/api/creneaux';
    const method = editMode !== null ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCreneau),
      });
    
      const data = await response.json();
    
      if (!response.ok) {
        alert(data.error || "Une erreur est survenue.");
        return;
      }
    
      // Reset si tout va bien
      setNewCreneau({ id_creneaux: "", heure_debut: "", heure_fin: "" });
      setEditMode(null);
      fetchCreneaux();
    } catch (error) {
      console.error('Error saving creneau:', error);
    }
  }
  
  async function handleDelete(id: string) {

    try {
      const response = await fetch(`/api/creneaux/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete creneau');
      
      fetchCreneaux();
    } catch (error) {
      console.error('Error deleting creneau:', error);
    }
  }


  function handleEdit(creneau: Creneau) {
    setEditMode(creneau.id_creneaux);
    setNewCreneau({
      id_creneaux: creneau.id_creneaux,
      heure_debut: creneau.heure_debut,
      heure_fin: creneau.heure_fin,
    });
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Gestion des Créneaux Horaires</h1>
          <Link href="/">
            <Button variant="outline">Retour</Button>
          </Link>
        </div>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="time"
                placeholder="Heure de début"
                value={newCreneau.heure_debut}
                onChange={(e) =>
                  setNewCreneau({ ...newCreneau, heure_debut: e.target.value })
                }
                required
              />
              <Input
                type="time"
                placeholder="Heure de fin"
                value={newCreneau.heure_fin}
                onChange={(e) =>
                  setNewCreneau({ ...newCreneau, heure_fin: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {editMode !== null ? "Modifier" : "Ajouter"}
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                {/* <TableHead>ID</TableHead> */}
                <TableHead>Heure de début</TableHead>
                <TableHead>Heure de fin</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {creneaux.map((creneau) => (
                <TableRow key={creneau.id_creneaux}>
                  {/* <TableCell>{creneau.id_creneaux}</TableCell> */}
                  <TableCell>{creneau.heure_debut}</TableCell>
                  <TableCell>{creneau.heure_fin}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(creneau)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(creneau.id_creneaux)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}