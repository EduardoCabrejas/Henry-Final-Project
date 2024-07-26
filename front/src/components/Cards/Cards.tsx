"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ITournament } from "@/interfaces/interfaceTournaments";
import { Tournaments } from "../Tournaments/Tournaments";
import { useMemo, useEffect } from "react";
import { setCards, setCurrentPage } from "@/redux/slices/cardsSlice";
import { setTournaments } from "@/redux/slices/tournamentSlice";
import { fetchTournaments } from "@/utils/fetchTournaments";
import { name } from "@/utils/tournamentsData";

const Cards: React.FC = () => {
  const { cards, filter, currentPage, cardsPerpage } = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTournaments = async () => {
      if (cards.length === 0) {
        try {
          const tournaments = await fetchTournaments();
          dispatch(setTournaments(tournaments));
          dispatch(setCards({ cards: tournaments }));
        } catch (error) {
          console.error("Error loading tournaments", error);
        }
      }
    };

    loadTournaments();
  }, [dispatch, cards.length]);

  const filteredCards = useMemo(() => {
    if (filter === "All Tournaments") {
      return cards;
    }
    return cards.filter(card => name[card.id] === filter);
  }, [cards, filter]);

  const totalPages = useMemo(() => {
    if (filteredCards.length === 0) return 0;
    return Math.min(Math.ceil(filteredCards.length / cardsPerpage), 3);
  }, [filteredCards, cardsPerpage]);

  const cardsPaginated: ITournament[] = useMemo(() => {
    const indexStart = (currentPage - 1) * cardsPerpage;
    const indexEnd = indexStart + cardsPerpage;
    return filteredCards.slice(indexStart, indexEnd);
  }, [filteredCards, currentPage, cardsPerpage]);

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div>
      {cards.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-x-6 gap-y-6 w-full ml-small mt-8">
            {cardsPaginated.map((tournament: ITournament) => (
              <Tournaments key={tournament.id} tournament={tournament} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handleChangePage(page)}
                className={`buttonPage mx-4 ${currentPage === page ? 'active' : ''}`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
