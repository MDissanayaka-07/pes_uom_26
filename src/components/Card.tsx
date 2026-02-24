interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const styles = {
  card: {
    background: "white",
    padding: 24,
    borderRadius: 16,
    border: "1px solid #e2e8f0",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
};

export default function Card({ children }: CardProps) {
  return <div style={styles.card}>{children}</div>;
}